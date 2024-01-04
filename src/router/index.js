import { createRouter, createWebHistory } from 'vue-router'
import { 
  HeroSection,
  NavSearch,
 } from '@/views/common'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HeroSection,
    },
    {
      path: '/nav-search',
      name: 'nav-search',
      component: NavSearch,
    },
  ]
})

export default router
