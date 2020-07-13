import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import SpotifyWebApi from "spotify-web-api-node";

import { IRootState, IAction, Response } from "../interfaces";

export enum USER {
  RECEIVE_USER = "user/RECEIVE_USER",
}

export const receiveUser = (
  data: SpotifyApi.CurrentUsersProfileResponse
): IAction<SpotifyApi.CurrentUsersProfileResponse> => {
  return { type: USER.RECEIVE_USER, data };
};

export const fetchUser = (
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
        dispatch(receiveUser(response.body));
      });
  };
};
