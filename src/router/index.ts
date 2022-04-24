import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes, authRoutes, asyncRoutes } from './route'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constantRoutes, ...authRoutes, ...asyncRoutes]
})

export default router
