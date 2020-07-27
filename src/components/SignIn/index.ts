import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { withRouter } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-node';

import SignIn from './SignIn';
import { fetchUser } from 'common/actions';
import { IAction, IRootState } from 'common/interfaces';
import { IStateProps, IDispatchProps } from './interfaces';

const mapStateToProps = (state: IRootState): IStateProps => {
  return {
    spotifyWebApi: state.spotifyWebApi,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IRootState, null, IAction<SpotifyApi.CurrentUsersProfileResponse>>
): IDispatchProps => {
  return {
    fetchUser: (api: SpotifyWebApi) => dispatch(fetchUser(api)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
