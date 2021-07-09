import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Calculation from '../views/Calculation.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: "/calculation"
  },
  {
    path: '/calculation',
    name: 'Calculation',
    component: Calculation
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
