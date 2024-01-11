import { createRouter, createWebHistory } from 'vue-router'
import { 
  HeroSection,
  NavSearch,
 } from '@/views/common'

//....views page start hosting.....
 import { 
  domainRegister
 } from '@/views/pages/domain'

 import { 
  LandingPage
 } from '@/views/pages/hosting'

 import { 
  WebsiteShared
 } from '@/views/pages/hosting'

 import { 
  EcommerceHost
 } from '@/views/pages/hosting'

 import { 
  ResellerHost
 } from '@/views/pages/hosting'
//...server start........
 import { 
  VpsServer
 } from '@/views/pages/server'
 import { 
  DedicatedServer
 } from '@/views/pages/server'
 //....views page end.....


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
      path: '/domain-register',  //..url key or path
      name: 'domainRegister',    //..name id name
      component: domainRegister, 
    },
    //...hosting......
    {
      path: '/Landingpage-hosting',  
      name: 'LandingPage',   
      component: LandingPage, 
    },
    {
      path: '/share-hosting',  
      name: 'WebsiteShared',   
      component: WebsiteShared, 
    },
    {
      path: '/ecommerce-hosting',  
      name: 'EcommerceHost',   
      component: EcommerceHost, 
    },
    {
      path: '/reseller-hosting',  
      name: 'ResellerHost',   
      component: ResellerHost, 
    },
    //...server.....
    {
      path: '/vps-server',  
      name: 'VpsServer',   
      component: VpsServer, 
    },
    {
      path: '/dadicated-server',  
      name: 'DedicatedServer',   
      component: DedicatedServer, 
    },

  
  ]
})

export default router
