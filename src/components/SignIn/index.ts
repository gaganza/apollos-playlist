import { connect, ConnectedProps } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SignIn from './SignIn';
import { fetchUser } from 'common/actions';
import {  IRootState } from 'common/interfaces';

const mapStateToProps = (state: IRootState) => {
  return {
    spotifyWebApi: state.spotifyWebApi,
  };
};

const mapDispatchToProps = {
  fetchUser
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type TSignInConnectedProps = ConnectedProps<typeof connector>;

export default connector(withRouter(SignIn));

