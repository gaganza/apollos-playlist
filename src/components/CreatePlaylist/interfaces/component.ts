import { RouteComponentProps } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-node';

export interface ICreatePlaylistProps {}

export interface ICreatePlaylistState {}

export interface IStateProps {
  spotifyWebApi: SpotifyWebApi;
  tracksAttributes: SpotifyApi.MultipleAudioFeaturesResponse | null;
}

export type TCreatePlaylistProps = ICreatePlaylistProps & IStateProps & RouteComponentProps;
