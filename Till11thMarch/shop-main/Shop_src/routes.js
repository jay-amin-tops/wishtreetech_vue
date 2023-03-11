// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/home.vue'
// import About from './components/about.vue'
import time_out_mainVue from './components/time_out_main.vue'

const routes = [
    {
        path: '/',
        // name: 'Home',
        component: Home
    },
    // {
    //     path: '/about',
    //     // name: 'about',
    //     component: About
    // },
    {
        path: '/about',
        // name: 'about',
        component: time_out_mainVue
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
