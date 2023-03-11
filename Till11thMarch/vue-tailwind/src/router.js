import Home from "./components/Home.vue"
import About from "./components/About.vue"
import Contact from "./components/Contact.vue"
import OptionAPI from "./components/01OptionAPI.vue"
import CompositionAPI from "./components/02CompositionAPI.vue"
import ExampleCompo from "./components/ExampleCompo.vue"
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
    
},{
    path: "/example",
    component: ExampleCompo,
    children: [{
        path: "optionapi",
        component: OptionAPI,   
    },{
        path: "compositionapi",
        component: CompositionAPI,   
    }],
}
]



const router = createRouter({ history: createWebHistory(), routes })
export default router

