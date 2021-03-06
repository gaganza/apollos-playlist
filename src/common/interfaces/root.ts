import SpotifyWebApi from 'spotify-web-api-node';
import { SnackbarProps } from '@material-ui/core';

import { IPagingObject } from 'common/interfaces';
import { ITopArtistsReducer } from 'components/TopArtists/reducer';

export interface IRootState {
  spotifyWebApi: SpotifyWebApi;
  user: SpotifyApi.CurrentUsersProfileResponse | null;
  playlists: IPagingObject<SpotifyApi.PlaylistObjectSimplified> | null;
  playlist: SpotifyApi.SinglePlaylistResponse | null;
  tracksAttributes: SpotifyApi.MultipleAudioFeaturesResponse | null;
  topArtists: ITopArtistsReducer | null;
  snackbar: SnackbarProps;
  followedArtists: SpotifyApi.UsersFollowedArtistsResponse | null;
}
