import { UserModel } from '../models/user';
import { IUser } from '../schemes/user';

export const addNewUser = async (user: IUser): Promise<any> => {
  const response = await UserModel.insertMany([user]);

  return response;
};

export const updateUser = async (user: IUser): Promise<any> => {
  const { _id, password, username } = user;
  const response = await UserModel.updateOne({ _id }, { username, password });

  return response;
};

export const getFirstUser = async (): Promise<any> => {
  const response = await UserModel.findOne();

  return response;
};
