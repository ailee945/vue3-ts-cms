import axios from 'axios';
import type { AxiosInstance } from 'axios';

import type { VRequestConfig, VRequestInterceptors } from './type';

class VRequest {
  instance: AxiosInstance;
  interceptors?: VRequestInterceptors;
  constructor(config: VRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    // 拦截器的三个粒度, 类(所有请求)=>对象(单个请求)=>单个请求方式(method)
    // 对象粒度
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
    // 类粒度
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      }
    );
  }
  // 单个method粒度
  request(config: VRequestConfig) {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config);
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res);
      }
      console.log(res);
    });
  }
}

export default VRequest;
