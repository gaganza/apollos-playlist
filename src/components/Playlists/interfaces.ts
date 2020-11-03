import { RouteComponentProps } from 'react-router-dom';
import { TPlaylistConnectedProps } from './index';

export interface IPlaylistsState {
  page: number;
  loading: boolean;
}

export type TPlaylistsProps = TPlaylistConnectedProps & RouteComponentProps;
