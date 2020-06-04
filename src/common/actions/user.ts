import { IAction, Response, ICurrentProfile } from "../interfaces";
import SpotifyWebApi from "spotify-web-api-node";
import camelize from "camelize";
import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { IRootState } from "../../redux/rootReducer";

export enum USER {
  RECEIVE_USER_DATA = "user/RECEIVE_USER_DATA",
}

export const receiveUserData = (
  data: ICurrentProfile
): IAction<ICurrentProfile> => {
  return { type: USER.RECEIVE_USER_DATA, data };
};

export const fetchUserData = (
  api: SpotifyWebApi
): ThunkAction<
  Promise<void>,
  IRootState,
  unknown,
  IAction<ICurrentProfile>
> => {
  return (dispatch: Dispatch<IAction<ICurrentProfile>>): Promise<void> => {
    return api
      .getMe()
      .then((response: Response<SpotifyApi.CurrentUsersProfileResponse>) => {
        dispatch(receiveUserData(camelize(response.body)));
      });
  };
};
