import { RouteComponentProps } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-node';

export interface IPlaylistProps {}

export interface IDispatchProps {
  fetchPlaylist: (api: SpotifyWebApi, playlistId: string) => Promise<void>;
  fetchTracksAttributes: (api: SpotifyWebApi, trackIds: string[]) => Promise<void>;
}

export interface IStateProps {
  spotifyWebApi: SpotifyWebApi;
  playlist: SpotifyApi.SinglePlaylistResponse | null;
  tracksAttributes: SpotifyApi.MultipleAudioFeaturesResponse | null;
}

export type TPlaylistProps = IPlaylistProps & IStateProps & RouteComponentProps & IDispatchProps;
