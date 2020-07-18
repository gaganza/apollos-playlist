import SpotifyWebApi from 'spotify-web-api-node';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { SnackbarProps } from '@material-ui/core';

import CreatePlaylist from './CreatePlaylist';
import { fetchTopArtists, openSnackbar } from 'common/actions';
import { IRootState, IAction } from 'common/interfaces';
import { IStateProps, IDispatchProps } from './interfaces';

const mapDispatchToProps = (
  dispatch: ThunkDispatch<
    IRootState,
    null,
    IAction<SpotifyApi.UsersTopArtistsResponse> | IAction<Partial<SnackbarProps>>
  >
): IDispatchProps => {
  return {
    fetchTopArtists: (api: SpotifyWebApi, timeRange: 'long_term' | 'medium_term' | 'short_term') =>
      dispatch(fetchTopArtists(api, timeRange)),
    openSnackBar: (data: Partial<SnackbarProps>) => dispatch(openSnackbar(data)),
  };
};

const mapStateToProps = (state: IRootState): IStateProps => {
  return {
    spotifyWebApi: state.spotifyWebApi,
    tracksAttributes: state.tracksAttributes,
    topArtists: state.topArtists,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePlaylist));
