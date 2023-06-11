import { Schema, model } from 'mongoose';
import { IUser } from '../schemes/user';

const userSchema = new Schema<IUser>({
  username: String,
  password: String,
});

export const UserModel = model('user', userSchema);
