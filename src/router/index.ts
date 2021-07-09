import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Sum from '../views/Sum.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: "/sum"
  },
  {
    path: '/sum',
    name: 'Sum',
    component: Sum
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
