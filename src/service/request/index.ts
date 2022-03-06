import axios from 'axios';
import type { AxiosInstance } from 'axios';

import { ElLoading } from 'element-plus';
import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading';

import type { VRequestConfig, VRequestInterceptors } from './type';

const DEFAULT_LOADING = true;

class VRequest {
  instance: AxiosInstance;
  interceptors?: VRequestInterceptors;
  loading?: LoadingInstance;
  showLoading?: boolean;

  constructor(config: VRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config);
    // 保存基本信息
    this.interceptors = config.interceptors;
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;
    // 拦截器的三个粒度, 类(所有请求)=>对象(单个请求)=>单个请求方式(method)
    // 对象 粒度
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
    // 类 粒度
    this.instance.interceptors.request.use(
      (config) => {
        // 对请求添加loading
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(0, 0, 0, 0.7)',
          });
        }
        // axios默认会对返回的结果进行一次封装
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        // 关闭加载动画
        this.loading?.close();
        const data = res.data;
        // 服务器返回错误的两种方式1
        if (data.returnCode === '-1001') {
          console.log('返回错误');
        } else {
          return data;
        }
      },
      (err) => {
        // 关闭加载动画
        this.loading?.close();
        // 服务器返回错误的两种方式2
        // if (err.response.status === 404) {
        //   console.log('404');
        // }
        return err;
      }
    );
  }
  // 单个method粒度
  request<T>(config: VRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      // 传入flase是修改showLoading默认值
      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          // 重置默认值, 以免影响下下一次loading执行
          this.showLoading = DEFAULT_LOADING;
          resolve(res);
        })
        .catch((err) => {
          // 重置默认值, 以免影响下下一次loading执行
          this.showLoading = DEFAULT_LOADING;
          reject(err);
        });
    });
  }

  get<T>(config: VRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }

  post<T>(config: VRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' });
  }

  delete<T>(config: VRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' });
  }

  patch<T>(config: VRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' });
  }
}

export default VRequest;
