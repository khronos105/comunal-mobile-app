import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes= [
  {
    path: '/',
    redirect: '/comunals'
  },
  {
    path: '/comunals',
    component: () => import('../pages/ComunalsPage.vue')
  },
  {
    path: '/comunals/:id',
    component: () => import('../pages/ComunalDetailsPage.vue')
  },
  {
    path: '/comunals/add',
    component: () => import('../pages/AddComunalPage.vue')
  },
  {
    path: '/invoice/:id',
    component: () => import('../pages/InvoicePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
