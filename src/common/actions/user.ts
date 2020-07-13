import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import SpotifyWebApi from "spotify-web-api-node";

import { IRootState, IAction, Response } from "../interfaces";

export enum USER {
  RECEIVE_USER_DATA = "user/RECEIVE_USER_DATA",
}

export const receiveUserData = (
  data: SpotifyApi.CurrentUsersProfileResponse
): IAction<SpotifyApi.CurrentUsersProfileResponse> => {
  return { type: USER.RECEIVE_USER_DATA, data };
};

export const fetchUserData = (
  api: SpotifyWebApi
): ThunkAction<
  Promise<void>,
  IRootState,
  unknown,
  IAction<SpotifyApi.CurrentUsersProfileResponse>
> => {
  return (dispatch: Dispatch<IAction<SpotifyApi.CurrentUsersProfileResponse>>): Promise<void> => {
    return api
      .getMe()
      .then((response: Response<SpotifyApi.CurrentUsersProfileResponse>) => {
        dispatch(receiveUserData(response.body));
      });
  };
};
