import { createStore } from 'vuex';
import { IRootModule } from './types';

import loginModule from './login/login';

export const store = createStore<IRootModule>({
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
  store.dispatch('loginModule/loadLocal');
}
