import { RouteComponentProps } from 'react-router-dom';

import { IAudioAttribute } from 'common/interfaces';
import { TCreatePlaylistConnectedProps } from '../index';


export type TCreatePlaylistProps = TCreatePlaylistConnectedProps & RouteComponentProps

export interface ICreatePlaylistState {
  query: IRecommendedQuery;
  selectedArtistsIds: string[];
  playlistName: string;
}

export interface IRecommendedQuery {
  acousticness: IAudioAttribute;
  danceability: IAudioAttribute;
  energy: IAudioAttribute;
  instrumentalness: IAudioAttribute;
  valence: IAudioAttribute;
}

