import { USER } from "../actions";
import { IAction, ICurrentProfile } from "../interfaces";

export function userReducer(
  state: ICurrentProfile = null,
  action: IAction<ICurrentProfile>
): ICurrentProfile {
  switch (action.type) {
    case USER.RECEIVE_USER_DATA:
      return action.data;

    default:
      return state;
  }
}
