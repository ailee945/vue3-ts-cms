import { ILoginModule } from './login/types';
export interface IRootModule {
  msg: string;
  age: number;
}

interface IRootWithModule {
  loginModule: ILoginModule;
}

export type IStoreType = IRootWithModule & IRootModule;
