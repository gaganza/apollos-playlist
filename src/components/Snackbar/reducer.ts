import merge from 'lodash/merge';
import { SnackbarProps } from '@material-ui/core';

import { IAction } from 'common/interfaces';
import { SNACKBAR } from 'common/actions/snackbar';

export const initialSnackbarState: SnackbarProps = {
  open: false,
  message: '',
  autoHideDuration: 10000,
  anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
};

export const snackBarReducer = (
  state: SnackbarProps = initialSnackbarState,
  action: IAction<Partial<SnackbarProps>>
): SnackbarProps => {
  switch (action.type) {
    case SNACKBAR.OPEN:
      return merge({}, state, action.data);

    case SNACKBAR.CLOSE:
      return merge({}, state, { ...state, open: false });

    default:
      return state;
  }
};
