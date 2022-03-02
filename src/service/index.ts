import VRequest from './request';
import { BASE_URL, TIMEOUT } from './request/config';

export const vRequest = new VRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});
