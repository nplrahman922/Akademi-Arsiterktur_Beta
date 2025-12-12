import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './Home.vue'
import AboutView from './TentangKami.vue'
import LoginView from './PaketKelas.vue'
import NotFound from './404.vue'
import Login from './Login.vue'
import Daftar from './Daftar.vue'
import AbouthMe from './AbouthMe.vue';

const routes = [

    { path: '/', component: HomeView },

    { path: '/Home', component: HomeView },
    { path: '/TentangKami', component: AboutView },
    { path: '/PaketKelas', component: LoginView },
    { path: '/404', component: NotFound },
    { path: '/Login', component: Login},
    { path: '/Daftar', component: Daftar},
    { path: '/AbouthMe', component: AbouthMe },

]

export const router = createRouter({
    history: createWebHistory(),
    routes,

    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        else {
            return { top: 0, behavior: 'smooth' }
        }
    }
})