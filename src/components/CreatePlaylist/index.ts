import { connect, ConnectedProps } from 'react-redux';
import { withRouter } from 'react-router-dom';


import CreatePlaylist from './CreatePlaylist';
import { fetchTopArtists, openSnackbar, fetchFollowedArtists } from 'common/actions';
import { clearPlaylist } from 'components/Playlists/actions';
import { IRootState } from 'common/interfaces';


const mapDispatchToProps = {
  fetchTopArtists,
  fetchFollowedArtists,
  openSnackbar,
  clearPlaylist
}

const mapStateToProps = (state: IRootState) => {
  return {
    spotifyWebApi: state.spotifyWebApi,
    user: state.user!,
    tracksAttributes: state.tracksAttributes,
    topArtists: state.topArtists,
    followedArtists: state.followedArtists,
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type TCreatePlaylistConnectedProps = ConnectedProps<typeof connector>;

export default connector(withRouter(CreatePlaylist));

