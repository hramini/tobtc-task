import { IUser } from '../../../back/scheme/user';

export interface IUserRegisterProps {
  user?: IUser;
  submitCallback(): void;
}

export interface IUserRegisterState {
  username: string;
  password: string;
}
