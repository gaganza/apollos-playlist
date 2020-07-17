import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SignOut from './SignOut';
import { setGlobalSpotifyClient } from 'common/actions';
import { IAction, IRootState } from 'common/interfaces';
import { IStateProps, IDispatchProps } from './interfaces';

const mapStateToProps = (state: IRootState): IStateProps => {
  return {
    spotifyWebApi: state.spotifyWebApi,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction<string>>): IDispatchProps => {
  return {
    setGlobalSpotifyClient: (token: string) => dispatch(setGlobalSpotifyClient(token)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignOut));
