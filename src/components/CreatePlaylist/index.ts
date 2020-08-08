import SpotifyWebApi from 'spotify-web-api-node';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { SnackbarProps } from '@material-ui/core';

import CreatePlaylist from './CreatePlaylist';
import { fetchTopArtists, openSnackbar, fetchFollowedArtists } from 'common/actions';
import { clearPlaylist } from 'components/Playlists/actions';
import { IRootState, IAction } from 'common/interfaces';
import { IStateProps, IDispatchProps } from './interfaces';

const mapDispatchToProps = (
  dispatch: ThunkDispatch<
    IRootState,
    null,
    IAction<SpotifyApi.UsersTopArtistsResponse> | IAction<Partial<SnackbarProps>> | IAction<unknown>
  >
): IDispatchProps => {
  return {
    fetchTopArtists: (api: SpotifyWebApi, timeRange: 'long_term' | 'medium_term' | 'short_term') =>
      dispatch(fetchTopArtists(api, timeRange)),
    fetchFollowedArtists: (api: SpotifyWebApi) => dispatch(fetchFollowedArtists(api)),
    openSnackBar: (data: Partial<SnackbarProps>) => dispatch(openSnackbar(data)),
    clearPlaylist: () => dispatch(clearPlaylist()),
  };
};

const mapStateToProps = (state: IRootState): IStateProps => {
  return {
    spotifyWebApi: state.spotifyWebApi,
    user: state.user!,
    tracksAttributes: state.tracksAttributes,
    topArtists: state.topArtists,
    followedArtists: state.followedArtists,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePlaylist));
