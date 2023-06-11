import { Box, Button } from '@mui/material';
import { ReactElement, useState } from 'react';
import { IPasswordViewProps, IPasswordViewState } from './password-view-type';

export const PasswordView = (props: IPasswordViewProps): ReactElement => {
  const { value } = props;
  const [state, setState] = useState<IPasswordViewState>({
    reveal: false,
  });
  const { reveal } = state;

  const showHidePassword = (show: boolean): void => {
    setState({
      ...state,
      reveal: show,
    });
  };

  return (
    <Box>
      {reveal ? value : '***'}
      <Button
        variant="contained"
        size="small"
        sx={{ marginInlineStart: '10px' }}
        onMouseDown={(): void => {
          showHidePassword(true);
        }}
        onMouseUp={(): void => {
          showHidePassword(false);
        }}
      >
        Show
      </Button>
    </Box>
  );
};
