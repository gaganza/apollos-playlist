import { RouteComponentProps } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";

import { IAction } from "../../common/interfaces";

export interface IAppProps {}

export interface IDispatchProps {
  setGlobalSpotifyClient: (token: string) => IAction<string>;
  fetchUser: (api: SpotifyWebApi) => Promise<void>;
}

export interface IStateProps {
  spotifyWebApi: SpotifyWebApi;
  user: SpotifyApi.CurrentUsersProfileResponse | null;
}

export type TAppProps = IAppProps &
  IStateProps &
  IDispatchProps &
  RouteComponentProps;
