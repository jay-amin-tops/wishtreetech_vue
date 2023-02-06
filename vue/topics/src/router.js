import Home from "./components/Home"
import About from "./components/About"
import LifeCycle from "./components/11LifeCycle"
import WatcherExample from "./components/13WatcherExample"
import ComputedReactive from "./components/14ComputeReactive"
import { createRouter, createWebHistory } from "vue-router"
const routes = [{
    path: "/",
    component: Home
},{
    path: "/about",
    component: About
},{
    path: "/lifecycle",
    component: LifeCycle
},{
    path: "/watcher",
    component: WatcherExample
},{
    path: "/compouted",
    component: ComputedReactive
}
]

const router = createRouter({ history:createWebHistory(),routes }) 
export default router

