<script setup>
import { ref } from 'vue'

const notice = ref(true)
</script>

<template>
  <v-app>
    <v-app-bar class="top-bar" flat density="comfortable">
      <v-app-bar-title class="font-weight-medium">Eurox</v-app-bar-title>
      <v-btn prepend-icon="mdi-web">Lang</v-btn>
      <v-btn prepend-icon="mdi-github" href="https://github.com/" target="_blank">GitHub</v-btn>
    </v-app-bar>

    <v-main>
      <div class="nav-tabs">
        <v-tabs color="indigo" align-tabs="start" class="site-width">
          <v-tab to="/profile">Profile</v-tab>
          <v-tab to="/demos">Demos</v-tab>
        </v-tabs>
      </div>
      <router-view />
    </v-main>

    <div v-if="notice" class="welcome">
      Welcome! This is a demo app to demonstrate my technical skills.
      <v-btn icon="mdi-close" size="x-small" variant="text" color="pink" style="float:right" @click="notice = false" />
    </div>
  </v-app>
</template>
