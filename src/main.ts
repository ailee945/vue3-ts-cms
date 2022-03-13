import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { setupStore } from './store';
// import { vRequest } from './service';

import 'normalize.css';
import './assets/css/index.less';
// 全局引用
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';

createApp(App).use(store).use(setupStore).use(router).mount('#app');

// 测试环境变量文件
// console.log(process.env.VUE_APP_BASE_URL);
// console.log(process.env.VUE_APP_BASE_NAME);

// 测试vRequest对象
// vRequest.request({
//   url: '/',
//   method: 'GET',
// });
