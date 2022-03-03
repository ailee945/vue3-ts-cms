import VRequest from './request';
import { BASE_URL, TIMEOUT } from './request/config';

export const vRequest = new VRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    // 携带token
    requestInterceptor: (config) => {
      const token = '';
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`;
      }
      return config;
    },
  },
  // showLoading: false,
});
