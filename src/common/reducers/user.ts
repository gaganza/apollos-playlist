import { USER } from "../actions";
import { IAction } from "../interfaces";

export function userReducer(
  state: SpotifyApi.CurrentUsersProfileResponse | null = null,
  action: IAction<SpotifyApi.CurrentUsersProfileResponse>
): SpotifyApi.CurrentUsersProfileResponse | null{
  switch (action.type) {
    case USER.RECEIVE_USER_DATA:
      return action.data;

    default:
      return state;
  }
}
