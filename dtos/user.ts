import { UserRoleNames } from './../enum/user';
export interface UserDto {
  id: number;
  email: string;
  name: string;
  call?: string;
  role: UserRoleNames;
  logged_at: Date;
  created_at: Date;
  updated_at?: Date;
}
