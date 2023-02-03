import Home from "./components/Home"
import About from "./components/About"
import { createRouter, createWebHistory } from "vue-router"
const routes = [{
    path: "/",
    component: Home
},{
    path: "/about",
    component: About
}]

const router = createRouter({ history:createWebHistory(),routes }) 
export default router

