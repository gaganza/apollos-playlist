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
  selectedArtistsIds: string[];
  playlistName: string;
}

export interface IDispatchProps {
  fetchTopArtists: (api: SpotifyWebApi, timeRange: 'long_term' | 'medium_term' | 'short_term') => Promise<void>;
  openSnackBar: (data: Partial<SnackbarProps>) => void;
  clearPlaylist: () => void;
}

export interface IStateProps {
  spotifyWebApi: SpotifyWebApi;
  user: SpotifyApi.UserProfileResponse;
  tracksAttributes: SpotifyApi.MultipleAudioFeaturesResponse | null;
  topArtists: ITopArtistsReducer | null;
}

export type TCreatePlaylistProps = ICreatePlaylistProps & IStateProps & IDispatchProps & RouteComponentProps;
