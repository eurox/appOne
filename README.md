# Eurofuenmayor Portfolio

Primera fase de la nueva web personal: réplica de `eurofuenmayor.es` construida con Laravel 13, Vue 3, Vue Router y Vuetify 3.

## Requisitos

- PHP 8.3 o superior
- Composer 2
- Node.js 22 o superior
- pnpm o npm

## Instalación

```bash
composer install
copy .env.example .env
php artisan key:generate
pnpm install
pnpm run build
php artisan serve
```

Durante el desarrollo se puede ejecutar `pnpm run dev` en otra terminal.

## Rutas

- `/profile`: réplica del perfil actual.
- `/demos`: réplica de las demostraciones interactivas.

La fase siguiente modernizará el diseño y el contenido una vez aprobada esta referencia funcional.

La configuración detallada para Apache en Ubuntu WSL y el posterior despliegue está en `docs/WSL_DEPLOYMENT.md`.
