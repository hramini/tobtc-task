import { Grid, Typography } from '@mui/material';
import { ReactElement, ReactNode } from 'react';
import { EmailView } from '../email-view/email-view';
import { KeyValue } from '../key-value/key-value';
import { IKeyValueProps } from '../key-value/key-value-type';
import { PasswordView } from '../password-view/password-view';
import { IUserInfoProps } from './user-info-type';

export const UserInfo = (props: IUserInfoProps): ReactElement => {
  const { user } = props;

  return (
    <Grid sx={{ paddingBlock: '24px' }}>
      <Typography sx={{ marginBottom: '10px', textDecoration: 'underline' }}>
        Registered User Information
      </Typography>
      {user
        ? Object.entries(user).map(
            (data: [string, any], index: number): ReactNode => {
              const [keyText, value] = data;
              const keyValueProps: Omit<IKeyValueProps, 'value'> = {
                key: index,
                keyText: keyText.toUpperCase(),
              };

              if (keyText === '_id' || keyText === '__v') {
                return null;
              }

              if (keyText === 'password') {
                return (
                  <KeyValue
                    {...keyValueProps}
                    value={<PasswordView value={value} />}
                  />
                );
              }

              if (keyText === 'username') {
                return (
                  <KeyValue
                    {...keyValueProps}
                    value={<EmailView value={value} />}
                  />
                );
              }

              return <KeyValue {...keyValueProps} value={value} />;
            },
          )
        : null}
    </Grid>
  );
};
