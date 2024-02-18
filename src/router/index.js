import { createRouter, createWebHistory } from 'vue-router'
import { 
  HeroSection,
  NavSearch,
 } from '@/views/common'

 import { 
  domainRegister,
  domainTransfer,
  SharedHost,
  WebsiteShared,
  EcommerceHost,
  ResellerHost,
  VpsServer,
  RocketServer,
  DedicatedServer,
  Contact,
  About,
  Login,
  Signup
 } from '@/views/pages'

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
      name: 'domain-register',    //..name id name
      component: domainRegister, 
    },
    {
      path: '/domain-transfer',  //..url key or path
      name: 'domain-transfer',    //..name id name
      component: domainTransfer, 
    },
    //...hosting......
    {
      path: '/shared-host',  
      name: 'shared-host',   
      component: SharedHost, 
    },
    {
      path: '/share-hosting',  
      name: 'website-shared',   
      component: WebsiteShared, 
    },
    {
      path: '/ecommerce-hosting',  
      name: 'ecommerce-host',   
      component: EcommerceHost, 
    },
    {
      path: '/reseller-hosting',  
      name: 'reseller-host',   
      component: ResellerHost, 
    },
    //...server.....
    {
      path: '/rocket-server',  
      name: 'rocket-server',   
      component: RocketServer, 
    },
    {
      path: '/vps-server',  
      name: 'vps-server',   
      component: VpsServer, 
    },
    {
      path: '/dadicated-server',  
      name: 'DedicatedServer',   
      component: DedicatedServer, 
    },
    //...login file.....
    {
      path: '/contact',  
      name: 'contact',   
      component: Contact, 
    },
    {
      path: '/about',  
      name: 'about',   
      component: About, 
    },
    {
      path: '/login',  
      name: 'login',   
      component: Login, 
    },
    {
      path: '/signup',  
      name: 'signup',   
      component: Signup, 
    },
   
  ]
})

export default router
