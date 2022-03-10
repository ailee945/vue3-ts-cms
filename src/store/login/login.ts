import { Module } from 'vuex';

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuById,
} from '@/service/login/login';
import localCache from '@/utils/cache';
import { mapMenusToRoutes } from '@/utils/map-menu';

import { ILoginModule } from './types';
import { IRootModule } from '../types';
import type { IAccount } from '@/service/login/types';

import router from '@/router';

const loginModule: Module<ILoginModule, IRootModule> = {
  namespaced: true,
  state: {
    token: '',
    userInfo: {},
    userMenu: [],
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    },
    changeUserMenu(state, userMenu: any) {
      state.userMenu = userMenu;
      // 获取到userMenu后动态注册组件
      const routes = mapMenusToRoutes(userMenu);
      routes.forEach((route) => {
        router.addRoute('main', route);
      });
    },
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 实现登录逻辑
      const loginResult = await accountLoginRequest(payload);
      // 保存token
      const { id, token } = loginResult.data;
      commit('changeToken', token);
      localCache.setCache('token', token);

      // 请求用户信息
      const userInfoResult = await requestUserInfoById(id);
      const userInfo = userInfoResult.data;
      commit('changeUserInfo', userInfo);
      localCache.setCache('userInfo', userInfo);

      // 请求用户菜单
      const userMenuResult = await requestUserMenuById(id);
      const userMenu = userMenuResult.data;
      commit('changeUserMenu', userMenu);
      localCache.setCache('userMenu', userMenu);

      // 跳转到首页(路由)
      router.push('/main');
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token');
      if (token) {
        commit('changeToken', token);
      }
      const userInfo = localCache.getCache('userInfo');
      if (userInfo) {
        commit('changeUserInfo', userInfo);
      }
      const userMenu = localCache.getCache('userMenu');
      if (userMenu) {
        commit('changeUserMenu', userMenu);
      }
    },
  },
};

export default loginModule;
