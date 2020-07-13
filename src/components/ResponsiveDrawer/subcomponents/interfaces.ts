import { RouteComponentProps } from 'react-router-dom';

export interface IProfileProps {}

export interface IStateProps {
  user: SpotifyApi.CurrentUsersProfileResponse | null;
}

export type TProfileProps = IProfileProps & IStateProps & RouteComponentProps;
