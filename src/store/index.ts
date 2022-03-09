import { createStore, Store, useStore as useVuexStore } from 'vuex';
import { IRootModule } from './types';
import { IStoreType } from './types';

import loginModule from './login/login';

const store = createStore<IRootModule>({
  state: {
    msg: 'jang',
    age: 18,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    loginModule,
  },
});

export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin');
}

// 在typescript及vuex中使用类型检测
export function useStore(): Store<IStoreType> {
  return useVuexStore();
}

export default store;
