import { RouteComponentProps } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-node';

export interface ISignInProps {}
export interface IDispatchProps {
  fetchUser: (api: SpotifyWebApi) => Promise<void>;
}

export interface IStateProps {
  spotifyWebApi: SpotifyWebApi;
}

export type TSignInProps = ISignInProps & IStateProps & IDispatchProps & RouteComponentProps;
