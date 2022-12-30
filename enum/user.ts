import { ReadonlyRecord } from './index';

export type UserRoleNames = 'admin' | 'manager' | 'user';
export const UserRole: ReadonlyRecord<UserRoleNames, UserRoleNames> = {
  admin: 'admin',
  manager: 'manager',
  user: 'user',
};

export type UsersOrderNames = 'id' | 'email' | 'created_at';
export const UsersOrder: ReadonlyRecord<UsersOrderNames, UsersOrderNames> = {
  id: 'id',
  email: 'email',
  created_at: 'created_at',
};

export type UsersSearchNames = 'email' | 'name' | 'call';
export const UsersSearch: ReadonlyRecord<UsersSearchNames, UsersSearchNames> = {
  email: 'email',
  name: 'name',
  call: 'call',
};
