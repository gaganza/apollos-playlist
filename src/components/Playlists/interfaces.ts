import { RouteComponentProps } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";

import { ICurrentProfile } from "../../common/interfaces";

export interface IPlaylistsProps {}

export interface IPlaylistsState {}

export interface IStateProps {
  spotifyWebApi: SpotifyWebApi;
  user: ICurrentProfile;
}

export type TPlaylistsProps = IPlaylistsProps &
  IStateProps &
  RouteComponentProps;
