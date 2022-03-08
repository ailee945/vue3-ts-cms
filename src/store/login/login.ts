import { Module } from 'vuex';

import { accountLoginRequest } from '@/service/login/login';

import { ILoginModule } from './types';
import { IRootModule } from '../types';
import { IAccount } from '@/service/login/types';

const loginModule: Module<ILoginModule, IRootModule> = {
  namespaced: true,
  state: {
    token: '',
    userInfo: {},
  },
  mutations: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginResult = await accountLoginRequest(payload);
      console.log(loginResult);
    },
  },
};

export default loginModule;
