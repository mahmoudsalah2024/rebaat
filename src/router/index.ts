import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/modules/home/pages/HomePage.vue'
import MoneyBoxPage from '@/modules/finance/pages/MoneyBoxPage.vue'
import MaintenancePage from '@/modules/maintenance/pages/MaintenancePage.vue'
import MakeMaintenancePage from '@/modules/maintenance/pages/MakeMaintenancePage.vue'
import MakeComplaintPage from '@/modules/complaints/pages/MakeComplaintPage.vue'
import CleanPage from '@/modules/clean/pages/CleanPage.vue'

import UserSingleComplaintPage from '@/modules/complaints/pages/user/SingleComplaintPage.vue'

import AdminListComplaintPage from '@/modules/complaints/pages/admin/ListComplaintPage.vue'
import AdminSingleComplaintPage from '@/modules/complaints/pages/admin/SingleComplaintPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/money_box', component: MoneyBoxPage },
    { path: '/maintenance', component: MaintenancePage },
    { path: '/orderMaintenance', component: MakeMaintenancePage },
    { path: '/makeComplaint', component: MakeComplaintPage },
    { path: '/clean', component: CleanPage },
    { path: '/u/complaints/:id', component: UserSingleComplaintPage },
    { path: '/complaints/:id', component: AdminSingleComplaintPage, meta: { role: 'admin' } },
    { path: '/complaints/list', component: AdminListComplaintPage, meta: { role: 'admin' } },
  ],
})

router.beforeEach((to) => {
  const role = localStorage.getItem('role') // 'user' | 'admin'

  if (to.meta.role && to.meta.role !== role) {
    return '/'
  }
})
export default router
