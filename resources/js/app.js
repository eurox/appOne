import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createVuetify } from 'vuetify'
import {
  VAlert, VApp, VAppBar, VBtn, VCard, VCardActions, VCheckbox, VDialog,
  VDivider, VExpandTransition, VForm, VIcon, VList, VMain, VSpacer,
  VTextField, VTextarea,
} from 'vuetify/components'
import { Ripple } from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import '../css/app.css'
import App from './App.vue'
import ProfilePage from './pages/ProfilePage.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 88 }
    return { top: 0 }
  },
  routes: [
    { path: '/', redirect: '/profile' },
    { path: '/profile', component: ProfilePage },
    { path: '/:pathMatch(.*)*', redirect: '/profile' },
  ],
})

const portfolioLight = { dark: false, colors: { background: '#f7f8fc', surface: '#ffffff', primary: '#135f70', secondary: '#db6b39', success: '#17835b' } }
const portfolioDark = { dark: true, colors: { background: '#101821', surface: '#17232e', primary: '#65c7d8', secondary: '#f49a6a', success: '#62d39d' } }

createApp(App)
  .use(router)
  .use(createVuetify({
    components: { VAlert, VApp, VAppBar, VBtn, VCard, VCardActions, VCheckbox, VDialog, VDivider, VExpandTransition, VForm, VIcon, VList, VMain, VSpacer, VTextField, VTextarea },
    directives: { Ripple },
    theme: { defaultTheme: 'portfolioLight', themes: { portfolioLight, portfolioDark } },
  }))
  .mount('#app')
