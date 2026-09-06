import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import '../css/app.css'
import App from './App.vue'
import ProfilePage from './pages/ProfilePage.vue'
import DemosPage from './pages/DemosPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/profile' },
        { path: '/profile', component: ProfilePage },
        { path: '/demos', component: DemosPage },
    ],
})

createApp(App).use(router).use(createVuetify({ components, directives })).mount('#app')
