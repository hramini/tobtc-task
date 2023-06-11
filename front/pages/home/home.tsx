import { Grid } from '@mui/material';
import axios from 'axios';
import { ReactElement, useEffect, useState } from 'react';
import { UserInfo } from '../../components/user-info/user-info';
import { UserRegister } from '../../components/user-register/user-register';
import { IHomeState } from './home-type';

export const Home = (): ReactElement => {
  const [state, setState] = useState<IHomeState>({});
  const { user } = state;

  const getUser = (): void => {
    axios.get('/api/getRegisteredUser').then((response: any): void => {
      setState({
        ...state,
        user: response.data.data,
      });
    });
  };

  useEffect((): void => {
    getUser();
  }, []);

  return (
    <Grid direction="row" container>
      <Grid item xs />
      <Grid item xs>
        <UserRegister
          submitCallback={(): void => {
            getUser();
          }}
          user={user}
        />
        <hr />
        <UserInfo user={user} />
      </Grid>
      <Grid item xs />
    </Grid>
  );
};
