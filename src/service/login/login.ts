import vRequest from '@/service';

import type { IAccount, IDataType, ILoginResult } from './types';

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  LoginMenuInfo = '/menu/',
}

export function accountLoginRequest(account: IAccount) {
  return vRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account,
  });
}

export function requestUserInfoById(id: number) {
  return vRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
  });
}

export function requestUserMenuById(id: number) {
  return vRequest.get<IDataType>({
    url: LoginAPI.LoginMenuInfo + id,
  });
}
