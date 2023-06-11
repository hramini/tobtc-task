import { Grid, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { IKeyValueProps } from './key-value-type';

export const KeyValue = (props: IKeyValueProps): ReactElement => {
  const { keyText, value } = props;

  return (
    <Grid container direction="row">
      <Grid item xs>
        <Typography sx={{ fontWeight: 'bold' }}>{keyText}</Typography>
      </Grid>
      <Grid item xs>
        <Typography sx={{ textAlign: 'end' }}>{value}</Typography>
      </Grid>
    </Grid>
  );
};
