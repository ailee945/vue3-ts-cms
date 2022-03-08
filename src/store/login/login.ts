import { Module } from 'vuex';
import { ILoginModule } from './types';
import { IRootModule } from '../types';

const loginModule: Module<ILoginModule, IRootModule> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
    };
  },
  mutations: {},
  actions: {
    accountLoginAction({ commit }, payload) {
      console.log(payload);
    },
  },
};

export default loginModule;
