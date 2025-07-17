import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('./pages/MainPage.vue'),
      children: [
        {
          path: '/',
          component: () => import('./pages/MeditationPage.vue'),
        },
        {
          path: 'statistics',
          component: import('./components/MeditationCollection/MeditationCollection.vue'),
        },
      ],
    },
  ],
  history: createWebHistory(),
})
