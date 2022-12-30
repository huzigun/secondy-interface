import { UserRoleNames } from '../enum/user';

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister extends ILogin {
  name: string;
  call?: string;
}

export interface ILoginResult {
  access_token: string;
  refresh_token: string;
}

export interface IUserUpdate {
  name?: string;
  call?: string;
  role?: UserRoleNames;
}

export interface IUserPasswordUpdate {
  oldPassword: string;
  newPassword: string;
}
