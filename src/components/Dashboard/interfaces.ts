import { RouteComponentProps } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";

import { ICurrentProfile } from "../../common/interfaces";

export interface IHomePageProps {}

export interface IHomePageState {}

export interface IStateProps {
  spotifyWebApi: SpotifyWebApi;
  user: ICurrentProfile;
}

export type THomePageProps = IHomePageProps & IStateProps & RouteComponentProps;
