import Home from "./components/Home.vue"
import About from "./components/About.vue"
import Contact from "./components/Contact.vue"
import { createRouter, createWebHistory } from "vue-router"
const routes = [{
    path: "/",
    component: Home
},{
    path: "/about",
    component: About
},{
    path: "/contact",
    component: Contact,
    
}
]

const router = createRouter({ history: createWebHistory(), routes })
export default router

