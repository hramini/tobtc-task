import { Request, Response, Router } from 'express';
import {
  addNewUser,
  getFirstUser,
  updateUser,
} from '../database/controllers/user-controller';

export const apiRouter = Router();

apiRouter.get(
  '/getRegisteredUser',
  async (request: Request, response: Response): Promise<void> => {
    try {
      const user = await getFirstUser();

      response.send({ success: true, data: user });
    } catch (error) {
      console.log({ error });

      response.send({
        success: false,
        error,
      });
    }
  },
);

apiRouter.post(
  '/registerUser',
  async (request: Request, response: Response): Promise<void> => {
    try {
      const { username, password } = request.body;

      console.log({ username, password });

      await addNewUser({
        username,
        password,
      });

      response.send({ success: true });
    } catch (error) {
      console.log({ error });
      response.send({
        success: false,
        error,
      });
    }
  },
);

apiRouter.post(
  '/updateUser',
  async (request: Request, response: Response): Promise<void> => {
    try {
      const { _id, username, password } = request.body;

      await updateUser({
        _id,
        username,
        password,
      });

      response.send({ success: true });
    } catch (error) {
      console.log({ error });
      response.send({
        success: false,
        error,
      });
    }
  },
);
