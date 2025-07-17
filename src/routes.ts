import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from './stores/auth.store'

export const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('./pages/MainPage.vue'),
      name: 'main',
    },
    {
      path: '/statistics',
      component: () => import('./pages/StatisticsPage.vue'),
      name: 'statistics',
    },
    {
      path: '/registration',
      component: () => import('./pages/RegistrationPage.vue'),
      name: 'registration',
    },
    {
      path: '/auth',
      component: () => import('./pages/AuthPage.vue'),
      name: 'auth',
    },
  ],
  history: createWebHistory(),
})

router.beforeEach((to) => {
  const authStore = useAuthStore()

  if (!authStore.getToken && to.name != 'registration' && to.name != 'auth') {
    return { name: 'registration' }
  }
})
