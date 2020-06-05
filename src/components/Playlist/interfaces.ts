import { RouteComponentProps } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";

import {
  ICurrentProfile,
  IPlaylist,
  IPagingObject,
} from "../../common/interfaces";

export interface IPlaylistProps {}

export interface IPlaylistState {}

export interface IDispatchProps {}

export interface IStateProps {
  spotifyWebApi: SpotifyWebApi;
  user: ICurrentProfile;
  playlists: IPagingObject<IPlaylist>;
}

export type TPlaylistProps = IPlaylistProps &
  IStateProps &
  RouteComponentProps &
  IDispatchProps;
