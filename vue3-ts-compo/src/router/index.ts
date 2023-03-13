import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LifeCycle from "../views/11LifeCycle.vue"
import WatcherExample from "../views/13WatcherExample.vue"
import ComputedReactive from "../views/14ComputeReactive.vue"
import Example from "../views/ExampleCompo.vue"
import Tailwaind from "../views/15Tailwaind.vue"
import Timeoutonmount from "../views/16timeoutLifeCycle.vue"
import ParentChildData from "../views/17parentChildDataAccess.vue"
import ComponentComposition from "../views/19ComponentComposition.vue"
import StoreComponentData from "../views/21StoreDataMultipleCompo.vue"
import TypeScriptExample from "../views/22TypeScriptExample.vue"
import FallthroughAttributes from "../views/23FallthroughAttributes.vue"
import TimeLinePinia from "../views/29timelinePinia.vue"
import TimeLinePiniaStructure from "../views/31timelineExtractingComplexity.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/example",
    component: Example,
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
    },{
        path:'typescript',
        component: TypeScriptExample,
    },{
        path:'fallthroughattributes',
        component: FallthroughAttributes,
    },{
        path:'piniastore',
        component: TimeLinePinia,
    },{
        path:'piniastorestructure',
        component: TimeLinePiniaStructure,
    },{
        path: 'fetchapidata',
        component: () => import('../views/32timelineFetchApiExtractingComplexity.vue'),
    },
    ],
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
