import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import MoneyBox from '../pages/money_box.vue'
import Maintenance from '../pages/maintenance.vue'
import orderMaintenance from '@/pages/forms/orderMaintenance.vue'
import makeComplaint from '@/pages/forms/makeComplaint.vue'
import Clear from '@/pages/clean/index.vue'
import Landing from '@/pages/landing.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     { path: '/', component: Home },
     { path: '/landing', component: Landing },
     { path: '/money_box', component: MoneyBox },
     {path: '/maintenance', component: Maintenance},
     {path:'/forms/orderMaintenance', component: orderMaintenance},
     {path:'/forms/makeComplaint', component: makeComplaint},
     {path:'/clean', component: Clear}
  ],
})

export default router
