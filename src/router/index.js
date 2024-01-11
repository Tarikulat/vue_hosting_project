import { createRouter, createWebHistory } from 'vue-router'
import { 
  HeroSection,
  NavSearch,
 } from '@/views/common'

 import { 
  domainRegister
 } from '@/views/pages/domain'

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
    {
      path: '/domain-register',
      name: 'domainRegister',
      component: domainRegister,
    },

  
  ]
})

export default router
