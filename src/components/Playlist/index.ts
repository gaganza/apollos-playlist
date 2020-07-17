import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { withRouter } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-node';

import Playlist from './Playlist';
import { fetchTracksAttributes } from 'common/actions';
import { fetchPlaylist } from './actions';
import { IAction, IRootState } from 'common/interfaces';
import { IStateProps, IDispatchProps } from './interfaces';

const mapDispatchToProps = (
  dispatch: ThunkDispatch<
    IRootState,
    null,
    IAction<SpotifyApi.SinglePlaylistResponse> | IAction<SpotifyApi.MultipleAudioFeaturesResponse>
  >
): IDispatchProps => {
  return {
    fetchPlaylist: (api: SpotifyWebApi, playlistId: string) => dispatch(fetchPlaylist(api, playlistId)),
    fetchTracksAttributes: (api: SpotifyWebApi, tracksId: string[]) => dispatch(fetchTracksAttributes(api, tracksId)),
  };
};

const mapStateToProps = (state: IRootState): IStateProps => {
  return {
    spotifyWebApi: state.spotifyWebApi,
    playlist: state.playlist,
    tracksAttributes: state.tracksAttributes,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Playlist));
