import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface VRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (err: any) => any;
}

export interface VRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: VRequestInterceptors<T>;
  showLoading?: boolean;
}
