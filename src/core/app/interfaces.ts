import { RouteComponentProps } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-node';
import { SnackbarProps } from '@material-ui/core';

import { IAction } from 'common/interfaces';

export interface IAppProps {}

export interface IDispatchProps {
  setGlobalSpotifyClient: (token: string) => IAction<string>;
  fetchUser: (api: SpotifyWebApi) => Promise<void>;
  openSnackbar: (data: Partial<SnackbarProps>) => void;
  closeSnackbar: () => void;
}

export interface IStateProps {
  spotifyWebApi: SpotifyWebApi;
  user: SpotifyApi.CurrentUsersProfileResponse | null;
  snackbar: SnackbarProps;
}

export type TAppProps = IAppProps & IStateProps & IDispatchProps & RouteComponentProps;
