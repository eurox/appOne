<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useTheme } from 'vuetify'
import { messages } from './messages'

const theme = useTheme()
const locale = ref(localStorage.getItem('portfolio-locale') || 'en')
const isDark = ref(localStorage.getItem('portfolio-theme') !== 'light')
const mobileMenu = ref(false)
const t = computed(() => messages[locale.value])

function toggleLocale() {
  locale.value = locale.value === 'en' ? 'es' : 'en'
  mobileMenu.value = false
}

function toggleTheme() {
  isDark.value = !isDark.value
}

watch(locale, (value) => {
  localStorage.setItem('portfolio-locale', value)
  document.documentElement.lang = value
})

watch(isDark, (value) => {
  localStorage.setItem('portfolio-theme', value ? 'dark' : 'light')
  theme.global.name.value = value ? 'portfolioDark' : 'portfolioLight'
})

onMounted(() => {
  document.documentElement.lang = locale.value
  theme.global.name.value = isDark.value ? 'portfolioDark' : 'portfolioLight'
})
</script>

<template>
  <v-app>
    <v-app-bar class="site-header" flat height="72">
      <div class="header-inner">
        <router-link class="brand" to="/profile" aria-label="Euro Fuenmayor - Home">
          <span class="brand-mark">EF</span>
          <span><strong>Euro Fuenmayor</strong><small>Senior Developer</small></span>
        </router-link>

        <nav class="desktop-nav" :aria-label="t.navigation">
          <v-btn variant="text" to="/profile">{{ t.profile }}</v-btn>
          <v-btn variant="text" href="/profile#contact">{{ t.contact }}</v-btn>
          <v-btn class="header-cv-button" color="primary" variant="flat" prepend-icon="mdi-file-pdf-box" href="/resumen-curricular.pdf?v2" target="_blank">{{ t.resumePdf }}</v-btn>
        </nav>

        <div class="header-actions">
          <v-btn icon :aria-label="t.toggleTheme" variant="text" @click="toggleTheme">
            <v-icon :icon="isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'" />
          </v-btn>
          <v-btn class="language-button" variant="outlined" prepend-icon="mdi-translate" @click="toggleLocale">
            {{ locale === 'en' ? 'ES' : 'EN' }}
          </v-btn>
          <v-btn class="mobile-menu-button" icon variant="text" :aria-label="t.menu" @click="mobileMenu = !mobileMenu">
            <v-icon :icon="mobileMenu ? 'mdi-close' : 'mdi-menu'" />
          </v-btn>
        </div>
      </div>
    </v-app-bar>

    <v-expand-transition>
      <nav v-if="mobileMenu" class="mobile-nav" :aria-label="t.navigation">
        <v-btn variant="text" to="/profile" @click="mobileMenu = false">{{ t.profile }}</v-btn>
        <v-btn variant="text" href="/profile#contact" @click="mobileMenu = false">{{ t.contact }}</v-btn>
        <v-btn color="primary" variant="flat" prepend-icon="mdi-file-pdf-box" href="/resumen-curricular.pdf?v2" target="_blank">{{ t.resumePdf }}</v-btn>
      </nav>
    </v-expand-transition>

    <v-main>
      <router-view :locale="locale" :t="t" />
    </v-main>

    <footer class="site-footer">
      <div class="site-width footer-inner">
        <div>
          <strong>Euro Dario Fuenmayor Contreras</strong>
          <p>{{ t.footer }}</p>
        </div>
        <div class="footer-links">
          <a href="mailto:development@eurofuenmayor.es" aria-label="Email"><v-icon icon="mdi-email-outline" /></a>
          <a href="https://www.linkedin.com/in/euro-fuenmayor" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><v-icon icon="mdi-linkedin" /></a>
          <a href="https://github.com/eurox" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><v-icon icon="mdi-github" /></a>
        </div>
      </div>
    </footer>
  </v-app>
</template>
