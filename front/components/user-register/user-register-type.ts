import { IUser } from '../../../back/database/schemes/user';

export interface IUserRegisterProps {
  user?: IUser;
  submitCallback(): void;
}

export interface IUserRegisterState {
  username: string;
  password: string;
}
