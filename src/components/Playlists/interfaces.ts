import { RouteComponentProps } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";

import {
  ICurrentProfile,
  IPaginationOptions,
  IPagingObject,
  IPlaylists,
} from "../../common/interfaces";

export interface IPlaylistsProps {}

export interface IPlaylistsState {
  page: number;
}

export interface IDispatchProps {
  fetchPlaylistsData: (
    api: SpotifyWebApi,
    userId: string,
    options?: IPaginationOptions
  ) => Promise<void>;
}

export interface IStateProps {
  spotifyWebApi: SpotifyWebApi;
  user: ICurrentProfile;
  playlists: IPagingObject<IPlaylists>;
}

export type TPlaylistsProps = IPlaylistsProps &
  IStateProps &
  RouteComponentProps &
  IDispatchProps;
