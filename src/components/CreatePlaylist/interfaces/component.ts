import { RouteComponentProps } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-node';
import { IAudioAttribute } from 'common/interfaces';

export interface ICreatePlaylistProps {}

export interface ICreatePlaylistState {
  acousticness: IAudioAttribute;
  danceability: IAudioAttribute;
  energy: IAudioAttribute;
  instrumentalness: IAudioAttribute;
  valence: IAudioAttribute;
}

export interface IStateProps {
  spotifyWebApi: SpotifyWebApi;
  tracksAttributes: SpotifyApi.MultipleAudioFeaturesResponse | null;
}

export type TCreatePlaylistProps = ICreatePlaylistProps & IStateProps & RouteComponentProps;
