import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-node';
import { ThunkDispatch } from 'redux-thunk';

import App from './App';
import { setGlobalSpotifyClient, fetchUser } from 'common/actions';
import { IAction, IRootState } from 'common/interfaces';
import { IDispatchProps, IStateProps } from './interfaces';

const mapStateToProps = (state: IRootState): IStateProps => {
  return {
    spotifyWebApi: state.spotifyWebApi,
    user: state.user,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IRootState, null, IAction<string> | IAction<SpotifyApi.CurrentUsersProfileResponse>>
): IDispatchProps => {
  return {
    setGlobalSpotifyClient: (token: string) => dispatch(setGlobalSpotifyClient(token)),
    fetchUser: (api: SpotifyWebApi) => dispatch(fetchUser(api)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
