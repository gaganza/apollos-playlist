import { RouteComponentProps } from 'react-router-dom';
import { TPlaylistConnectedProps } from './index';

export interface IPlaylistState {
  loading: boolean;
}

export type TPlaylistProps = TPlaylistConnectedProps & RouteComponentProps;
