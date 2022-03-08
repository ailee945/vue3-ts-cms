import { createStore } from 'vuex';
import { IRootModule } from './types';

import loginModule from './login/login';

export default createStore<IRootModule>({
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
