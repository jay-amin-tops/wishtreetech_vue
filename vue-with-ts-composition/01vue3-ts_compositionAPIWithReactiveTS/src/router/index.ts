import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
  },{
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/example',
    name: 'example',
    component: () => import('../views/Example.vue'),
    children:[
      {
          path: 'datetimewithluxonsimplemenu',
          component: () => import('../views/22DateTimeWithLuxonJustMenu.vue'),
      },
      {
          path: 'datetimewithluxon',
          component: () => import('../views/23DateTimeWithLuxon.vue'),
      },
      {
          path: 'filterdatawithoutcomputer',
          component: () => import('../views/24DateTimeWithLuxonFilterWithoutComputed.vue'),
      },
      {
          path: 'filterdata',
          component: () => import('../views/25DateTimeWithLuxonFilterWithCompputer.vue'),
      },
      {
          path: 'propsfiltereddata',
          component: () => import('../views/27PropsFilteredData.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
