import { USER } from 'common/actions';
import { IAction } from 'common/interfaces';

export const userReducer = (
  state: SpotifyApi.CurrentUsersProfileResponse | null = null,
  action: IAction<SpotifyApi.CurrentUsersProfileResponse>
): SpotifyApi.CurrentUsersProfileResponse | null => {
  switch (action.type) {
    case USER.RECEIVE_USER:
      return action.data;

    default:
      return state;
  }
};
