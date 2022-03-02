import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw, Router } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue'),
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main/main.vue'),
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
