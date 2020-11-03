import { connect, ConnectedProps } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Playlists from './Playlists';
import { fetchPlaylists } from './actions';
import {IRootState } from 'common/interfaces';


const mapDispatchToProps = {
  fetchPlaylists
}

const mapStateToProps = (state: IRootState) => {
  return {
    spotifyWebApi: state.spotifyWebApi,
    user: state.user,
    playlists: state.playlists,
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type TPlaylistConnectedProps = ConnectedProps<typeof connector>;

export default connector(withRouter(Playlists));
