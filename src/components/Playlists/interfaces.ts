import { RouteComponentProps } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-node';

import { IPaginationOptions, IPagingObject } from 'common/interfaces';

export interface IPlaylistsProps {}

export interface IPlaylistsState {
  page: number;
  loading: boolean;
}

export interface IDispatchProps {
  fetchPlaylists: (api: SpotifyWebApi, userId: string, options: IPaginationOptions) => Promise<void>;
}

export interface IStateProps {
  spotifyWebApi: SpotifyWebApi;
  user: SpotifyApi.CurrentUsersProfileResponse | null;
  playlists: IPagingObject<SpotifyApi.PlaylistObjectSimplified> | null;
}

export type TPlaylistsProps = IPlaylistsProps & IStateProps & RouteComponentProps & IDispatchProps;
