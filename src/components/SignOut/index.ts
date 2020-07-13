import { Dispatch } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsFunction } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SignOut from './SignOut';
import { setGlobalSpotifyClient } from '../../common/actions';
import { IAction, IRootState } from '../../common/interfaces';
import { IStateProps, ISignOutProps, IDispatchProps } from './interfaces';

const mapStateToProps: MapStateToPropsParam<IStateProps, ISignOutProps, IRootState> = (
  state: IRootState
): IStateProps => {
  return {
    spotifyWebApi: state.spotifyWebApi,
  };
};

const mapDispatchToProps: MapDispatchToPropsFunction<IDispatchProps, ISignOutProps> = (
  dispatch: Dispatch<IAction<string>>
): IDispatchProps => {
  return {
    setGlobalSpotifyClient: (token: string) => dispatch(setGlobalSpotifyClient(token)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignOut));
