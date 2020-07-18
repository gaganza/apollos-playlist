import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';

import CreatePlaylist from './CreatePlaylist';
import { IRootState, IAction } from 'common/interfaces';
import { IStateProps, IDispatchProps } from './interfaces';
import SpotifyWebApi from 'spotify-web-api-node';
import { fetchTopArtists } from 'common/actions';

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IRootState, null, IAction<SpotifyApi.UsersTopArtistsResponse>>
): IDispatchProps => {
  return {
    fetchTopArtists: (api: SpotifyWebApi, timeRange: 'long_term' | 'medium_term' | 'short_term') =>
      dispatch(fetchTopArtists(api, timeRange)),
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
