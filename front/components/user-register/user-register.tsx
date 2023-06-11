import { Box, Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { IUserRegisterProps, IUserRegisterState } from './user-register-type';

export const UserRegister = (props: IUserRegisterProps): ReactElement => {
  const { user, submitCallback } = props;

  console.log({ user });

  const [state, setState] = useState<IUserRegisterState>({
    username: '',
    password: '',
  });
  const { username, password } = state;

  useEffect((): void => {
    setState({
      ...state,
      username: user?.username ?? '',
      password: user?.password ?? '',
    });
  }, [user]);

  const onUsernameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;

    setState({
      ...state,
      username: value,
    });
  };

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;

    setState({
      ...state,
      password: value,
    });
  };

  const updateUser = async (): Promise<void> => {
    const updateResponse = await axios.post('/api/updateUser', {
      _id: user?._id,
      username,
      password,
    });

    submitCallback();

    console.log({ updateResponse });
  };

  const registerUser = async (): Promise<void> => {
    const registerResponse = await axios.post('/api/registerUser', {
      username,
      password,
    });

    submitCallback();

    console.log({ registerResponse });
  };

  return (
    <Grid sx={{ paddingBlock: '24px' }}>
      <Box
        component="form"
        onSubmit={(event): void => {
          event.preventDefault();

          user ? updateUser() : registerUser();
        }}
      >
        <TextField
          label="Email"
          value={username}
          fullWidth
          type="email"
          placeholder="example@example.com"
          onChange={onUsernameChange}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          fullWidth
          onChange={onPasswordChange}
          sx={{ marginTop: '10px' }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{ marginTop: '10px' }}
          type="submit"
        >
          {user ? 'Update' : 'Register'}
        </Button>
      </Box>
    </Grid>
  );
};
