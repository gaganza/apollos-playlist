import { RouteComponentProps } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";

import { IAction } from "../../common/interfaces";

export interface ISignInProps {}
export interface IDispatchProps {
  setGlobalSpotifyClient: (token: string) => IAction<string>;
}

export interface IStateProps {
  spotifyWebApi: SpotifyWebApi;
}

export type TSignInProps = ISignInProps &
  IStateProps &
  IDispatchProps &
  RouteComponentProps;
