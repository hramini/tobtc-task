import { IUser } from '../../../back/database/schemes/user';

export interface IUserInfoProps {
  user?: IUser;
}

export interface IUserInfoState {
  username: string;
  password: string;
}
