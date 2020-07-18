import { RouteComponentProps } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-node';
import { SnackbarProps } from '@material-ui/core';

import { IAudioAttribute } from 'common/interfaces';
import { ITopArtistsReducer } from 'components/TopArtists/reducer';

export interface ICreatePlaylistProps {}

export interface IRecommendedQuery {
  acousticness: IAudioAttribute;
  danceability: IAudioAttribute;
  energy: IAudioAttribute;
  instrumentalness: IAudioAttribute;
  valence: IAudioAttribute;
}
export interface ICreatePlaylistState {
  query: IRecommendedQuery;
  results: SpotifyApi.RecommendationsFromSeedsResponse | null;
  selectedArtistsIds: string[];
  finalizeView: boolean;
}

export interface IDispatchProps {
  fetchTopArtists: (api: SpotifyWebApi, timeRange: 'long_term' | 'medium_term' | 'short_term') => Promise<void>;
  openSnackBar: (data: Partial<SnackbarProps>) => void;
}

export interface IStateProps {
  spotifyWebApi: SpotifyWebApi;
  tracksAttributes: SpotifyApi.MultipleAudioFeaturesResponse | null;
  topArtists: ITopArtistsReducer | null;
}

export type TCreatePlaylistProps = ICreatePlaylistProps & IStateProps & IDispatchProps & RouteComponentProps;
