# Desarrollo en WSL y despliegue

## 1. Preparar Ubuntu 24.04

El proyecto necesita PHP 8.3 o superior y Composer 2. Ejecuta en una terminal de Ubuntu:

```bash
sudo apt-get update
sudo DEBIAN_FRONTEND=noninteractive apt-get install -y \
  php8.3-cli php8.3-fpm php8.3-mbstring php8.3-xml php8.3-curl \
  php8.3-zip php8.3-sqlite3 php8.3-mysql composer unzip libapache2-mod-fcgid
sudo a2enmod proxy_fcgi setenvif rewrite
```

Esta configuración usa PHP-FPM 8.3 únicamente para esta web y no obliga a cambiar el PHP 7.1 usado por otros VirtualHosts.

## 2. Preparar Laravel

```bash
cd /home/efuenmayor/eurofuenmayor-portfolio
composer83 install
cp .env.example .env
php8.3 artisan key:generate
touch database/database.sqlite
php8.3 artisan migrate
chmod -R ug+rwX storage bootstrap/cache
```

Los recursos de Vue y Vuetify ya se encuentran compilados en `public/build`.

Los comandos globales configurados en WSL son:

- `composer71`: Composer 1 ejecutado con PHP 7.1.
- `composer83`: Composer 2 ejecutado con PHP 8.3.

## 3. Activar el sitio en Apache

```bash
sudo cp deploy/apache/eurofuenmayor.localhost.conf /etc/apache2/sites-available/
sudo a2ensite eurofuenmayor.localhost.conf
sudo service php8.3-fpm restart
sudo service apache2 restart
```

La web queda disponible en `http://eurofuenmayor.localhost`.

## 4. Flujo Git

Cuando exista el repositorio remoto:

```bash
git remote add origin URL_DEL_REPOSITORIO
git add .
git commit -m "Create Laravel Vue Vuetify portfolio replica"
git push -u origin main
```

No se debe subir `.env`, `vendor/` ni `node_modules/`.

## 5. Hosting

El servidor de producción debe apuntar el dominio al directorio `public`, usar PHP 8.3+ y ejecutar:

```bash
composer install --no-dev --optimize-autoloader
php artisan migrate --force
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

El procedimiento final dependerá de si el hosting ofrece SSH, Git Deployment, cPanel o solamente FTP.
