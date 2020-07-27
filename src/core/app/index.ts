import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-node';
import { ThunkDispatch } from 'redux-thunk';

import App from './App';
import { fetchUser, closeSnackbar, openSnackbar } from 'common/actions';
import { IAction, IRootState } from 'common/interfaces';
import { IDispatchProps, IStateProps } from './interfaces';
import { SnackbarProps } from '@material-ui/core';

const mapStateToProps = (state: IRootState): IStateProps => {
  return {
    spotifyWebApi: state.spotifyWebApi,
    user: state.user,
    snackbar: state.snackbar,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<
    IRootState,
    null,
    IAction<SpotifyApi.CurrentUsersProfileResponse> | IAction<unknown> | IAction<Partial<SnackbarProps>>
  >
): IDispatchProps => {
  return {
    fetchUser: (api: SpotifyWebApi) => dispatch(fetchUser(api)),
    openSnackbar: (data: Partial<SnackbarProps>) => dispatch(openSnackbar(data)),
    closeSnackbar: () => dispatch(closeSnackbar()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
