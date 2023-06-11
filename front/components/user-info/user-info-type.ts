import { IUser } from '../../../back/scheme/user';

export interface IUserInfoProps {
  user?: IUser;
}

export interface IUserInfoState {
  username: string;
  password: string;
}
