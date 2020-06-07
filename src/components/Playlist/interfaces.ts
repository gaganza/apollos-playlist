import { RouteComponentProps } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";

import {
  ICurrentProfile,
  IPlaylist,
  IAudioFeatures,
} from "../../common/interfaces";

export interface IPlaylistProps {}

export interface IPlaylistState {
  playlist: IPlaylist | null;
  trackAudioFeatures: IAudioFeatures[];
}

export interface IDispatchProps {}

export interface IStateProps {
  spotifyWebApi: SpotifyWebApi;
  user: ICurrentProfile;
}

export type TPlaylistProps = IPlaylistProps &
  IStateProps &
  RouteComponentProps &
  IDispatchProps;
