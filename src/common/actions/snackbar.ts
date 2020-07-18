import { SnackbarProps } from '@material-ui/core';

import { IAction } from 'common/interfaces';

export enum SNACKBAR {
  OPEN = 'snackbar/OPEN',
  CLOSE = 'snackbar/CLOSE',
}

export const openSnackbar = (data: Partial<SnackbarProps>): IAction<Partial<SnackbarProps>> => {
  return { type: SNACKBAR.OPEN, data };
};

export const closeSnackbar = (): IAction<unknown> => {
  return { type: SNACKBAR.CLOSE, data: undefined };
};
