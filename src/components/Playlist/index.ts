import { connect, ConnectedProps } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Playlist from './Playlist';
import { fetchTracksAttributes } from 'common/actions';
import { fetchPlaylist } from './actions';
import { IRootState } from 'common/interfaces';


const mapDispatchToProps = {
  fetchPlaylist,
  fetchTracksAttributes
}

const mapStateToProps = (state: IRootState) => {
  return {
    spotifyWebApi: state.spotifyWebApi,
    playlist: state.playlist,
    tracksAttributes: state.tracksAttributes,
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type TPlaylistConnectedProps = ConnectedProps<typeof connector>;

export default connector(withRouter(Playlist));
