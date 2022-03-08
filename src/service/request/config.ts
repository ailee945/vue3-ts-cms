// 三种定义BASE_URL的方式
// let BASE_URL = 'production';
// let BASE_NAME = 'pro';

// let BASE_URL = 'development';
// let BASE_NAME = 'dev';

// let BASE_URL = 'test';
// let BASE_NAME = 'test';

// 方式二
export let BASE_URL = '';
export const TIMEOUT = 5000;
if (process.env.NODE_ENV === 'development') {
  // 开发环境
  BASE_URL = '/api';
} else if (process.env.NODE_ENV === 'test') {
  // 测试环境
  BASE_URL = 'test';
} else {
  // 生产环境
  BASE_URL = 'production';
}

// 方式三
// 定义环境变量
// .env.development
// .env.test
// .env.production
