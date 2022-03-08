import VRequest from './request';
import { BASE_URL, TIMEOUT } from './request/config';

const vRequest = new VRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    // 携带token
    requestInterceptor: (config) => {
      const token = '';
      if (token) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        config.headers!.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      return res;
    },
    responseInterceptorCatch: (err) => {
      return err;
    },
  },
  // showLoading: false,
});

export default vRequest;
