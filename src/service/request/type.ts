import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface VRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any;
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch?: (err: any) => any;
}

export interface VRequestConfig extends AxiosRequestConfig {
  interceptors?: VRequestInterceptors;
}
