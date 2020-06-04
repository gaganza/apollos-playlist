import { RouteComponentProps } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";

import { IAction, ICurrentProfile } from "./common/interfaces";

export interface IApollosPlaylistProps {}

export interface IDispatchProps {
  setGlobalSpotifyClient: (token: string) => IAction<string>;
  fetchUserData: (api: SpotifyWebApi) => Promise<void>;
}

export interface IStateProps {
  spotifyWebApi: SpotifyWebApi;
  user: ICurrentProfile;
}

export type TApollosPlaylistProps = IApollosPlaylistProps &
  IStateProps &
  IDispatchProps &
  RouteComponentProps;
