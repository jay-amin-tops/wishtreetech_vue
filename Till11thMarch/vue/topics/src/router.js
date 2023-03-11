import Home from "./components/Home"
import About from "./components/About"
import LifeCycle from "./components/11LifeCycle"
import WatcherExample from "./components/13WatcherExample"
import ComputedReactive from "./components/14ComputeReactive"
import ExampleCompo from "./components/ExampleCompo.vue"
import Tailwaind from "./components/15Tailwaind"
import Timeoutonmount from "./components/16timeoutLifeCycle"
import ParentChildData from "./components/17parentChildDataAccess"
import ComponentComposition from "./components/19ComponentComposition"
import StoreComponentData from "./components/21StoreDataMultipleCompo"
import { createRouter, createWebHistory } from "vue-router"
const routes = [{
    path: "/",
    component: Home
}, {
    path: "/about",
    component: About
},
// {
//     path: "/lifecycle",
//     component: LifeCycle
// }, {
//     path: "/watcher",
//     component: WatcherExample
// }, {
//     path: "/compouted",
//     component: ComputedReactive
// },
{
    path: "/example",
    component: ExampleCompo,
    children: [{
        path: 'watcher',
        component: WatcherExample,
    }, {
        path: 'computed',
        component: ComputedReactive,
    }, {
        path: 'lifecycle',
        component: LifeCycle,
    }, {
        path: 'tailwaind',
        component: Tailwaind,
    }, {
        path: 'timeoutonmount',
        component: Timeoutonmount,
    }, {
        path: 'parentchild',
        component: ParentChildData,
    },{
        path: 'compocomposition',
        component: ComponentComposition,
    },{
        path:'storedata',
        component: StoreComponentData,
    }


    ],
}
]

const router = createRouter({ history: createWebHistory(), routes })
export default router

