import { RouteComponentProps } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";

import {
  ICurrentProfile,
  IPaginationOptions,
  IPagingObject,
  IPlaylist,
} from "../../common/interfaces";

export interface IPlaylistsProps {}

export interface IPlaylistsState {
  page: number;
}

export interface IDispatchProps {
  fetchPlaylistData: (
    api: SpotifyWebApi,
    userId: string,
    options?: IPaginationOptions
  ) => Promise<void>;
}

export interface IStateProps {
  spotifyWebApi: SpotifyWebApi;
  user: ICurrentProfile;
  playlists: IPagingObject<IPlaylist>;
}

export type TPlaylistsProps = IPlaylistsProps &
  IStateProps &
  RouteComponentProps &
  IDispatchProps;
