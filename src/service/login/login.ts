import vRequest from '@/service';

import type { IAccount, IDataType, ILoginResult } from './types';

enum LoginAPI {
  AccountLogin = '/login',
}

export function accountLoginRequest(account: IAccount) {
  return vRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account,
  });
}
