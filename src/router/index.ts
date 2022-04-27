import { createRouter, createWebHashHistory } from 'vue-router'

import { asyncRoutes, authRoutes, constantRoutes } from './route'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constantRoutes, ...authRoutes, ...asyncRoutes]
})

export default router
