<template>
  <main class="site-width">
    <v-card class="profile-card" elevation="2">
      <section class="profile-header">
        <img class="avatar-photo" :src="'/eurox.jpg'" alt="Euro Dario Fuenmayor Contreras">
        <div class="profile-name">Euro Dario Fuenmayor Contreras</div>
        <div class="profile-role">Semi-Senior Web developer</div>
        <div class="profile-copy">Master of Science in Telematics, Bachelor of Science in Electrical Engineering</div>
        <div class="profile-copy">More than 10 years of experience programming and 5 years of experience in web development</div>
      </section>
      <div class="skill-row angular-row">
        <svg class="angular-logo" viewBox="0 0 250 250" aria-label="Angular Logo"><path fill="#DD0031" d="M125 30 31.9 63.2l14.2 123.1L125 230l78.9-43.7 14.2-123.1z"/><path fill="#C3002F" d="M125 30v200l78.9-43.7 14.2-123.1z"/><path fill="#fff" d="M125 52.1 66.8 182.6h21.7l11.7-29.2h49.4l11.7 29.2H183zm17 83.3h-34l17-40.9z"/></svg>
        <span>I developed this app using Angular 8 and Angular Material.</span>
      </div>
      <div class="skill-row">PHP, JavaScript, TypeScript(entry level), HTML/CSS, Jquery</div>
      <div class="skill-row">Frameworks/Platforms: Laravel, Angular(entry level), Express(entry level), Vue, Vuetify Bootstrap</div>
      <div class="skill-row">CMS: Wordpress, Plugins: WooCommerce, WP Backery builder, Elementor, WPML</div>
      <div class="skill-row">Databases: MYSQL/MariaDB, MSSQL</div>
    </v-card>
  </main>
</template>
