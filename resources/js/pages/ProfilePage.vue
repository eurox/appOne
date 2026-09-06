<template>
  <main class="site-width">
    <v-card class="profile-card" elevation="2">
      <section class="profile-header">
        <img class="avatar-photo" :src="'/eurox.jpg'" alt="Euro Dario Fuenmayor Contreras">
        <div class="profile-name">Euro Dario Fuenmayor Contreras</div>
        <div class="profile-role">Semi-Senior Web developer</div>
        <div class="profile-copy">Master of Science in Telematics, Bachelor of Science in Electrical Engineering</div>
        <div class="profile-copy">More than 15 years of experience programming and 10 years of experience in web development</div>
      </section>
      <div class="skill-row technology-row">
        <span class="technology-icons" aria-label="Laravel, Vue and Vuetify">
          <v-icon class="laravel-icon" icon="mdi-laravel" title="Laravel"></v-icon>
          <v-icon class="vue-icon" icon="mdi-vuejs" title="Vue.js"></v-icon>
          <v-icon class="vuetify-icon" icon="mdi-vuetify" title="Vuetify"></v-icon>
        </span>
        <span>I developed this app using Laravel 13.30.1, Vue 3.5.42 and Vuetify 3.13.3.</span>
      </div>
      <div class="skill-row">PHP, JavaScript, TypeScript, HTML/CSS, Jquery</div>
      <div class="skill-row">Certified Application Developer by ServiceNow</div>
      <div class="skill-row">Use of AI tools following SDD (Spec-Driven Development)</div>
      <div class="skill-row">Frameworks/Platforms: ServiceNow, Laravel, Express, Next.js, Electron, Vue, Vuetify, Bootstrap</div>
      <div class="skill-row">Databases: MYSQL/MariaDB, MSSQL</div>
      <div class="skill-row">Development of embedded electronic systems based on microcontrollers (Microchip PIC, Atmel Arduino and Espressif ESP32), and PCB design</div>
      <div class="skill-row">University professor, academic coordinator, and thesis advisor for bachelor's and master's degree students, teaching courses in electronics and mathematics</div>
      <div class="skill-row">Enthusiastic and passionate about video game development and fantasy storytelling</div>
    </v-card>
  </main>
</template>
