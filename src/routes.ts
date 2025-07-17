import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('./pages/MainPage.vue'),
      children: [
        {
          path: 'statistics',
          component: () => import('./pages/StatisticsPage.vue'),
        },
      ],
    },
  ],
  history: createWebHistory(),
})
