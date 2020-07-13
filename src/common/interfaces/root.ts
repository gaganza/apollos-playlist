import SpotifyWebApi from 'spotify-web-api-node';

import { IPagingObject } from 'common/interfaces';

export interface IRootState {
  spotifyWebApi: SpotifyWebApi;
  user: SpotifyApi.CurrentUsersProfileResponse | null;
  playlists: IPagingObject<SpotifyApi.PlaylistObjectSimplified> | null;
  playlist: SpotifyApi.SinglePlaylistResponse | null;
}
