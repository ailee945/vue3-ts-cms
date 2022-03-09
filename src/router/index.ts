import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw, Router } from 'vue-router';

import localCache from '@/utils/cache';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'main',
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

// 导航守卫，如果没有token的话就会直接跳转到登录页面
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token');
    if (!token) {
      return '/login';
    }
  }
});

export default router;
