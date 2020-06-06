import SpotifyWebApi from "spotify-web-api-node";
import camelize from "camelize";
import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";

import {
  IAction,
  Response,
  IPaginationOptions,
  IPlaylist,
  IPagingObject,
  IRootState,
} from "../../common/interfaces";

export enum PLAYLISTS {
  RECEIVE_PLAYLIST_DATA = "playlists/RECEIVE_PLAYLIST_DATA",
}

export const receivePlaylistData = (
  data: IPagingObject<IPlaylist>
): IAction<IPagingObject<IPlaylist>> => {
  return { type: PLAYLISTS.RECEIVE_PLAYLIST_DATA, data };
};

export const fetchPlaylistData = (
  api: SpotifyWebApi,
  userId: string,
  options?: IPaginationOptions
): ThunkAction<
  Promise<void>,
  IRootState,
  unknown,
  IAction<IPagingObject<IPlaylist>>
> => {
  return (
    dispatch: Dispatch<IAction<IPagingObject<IPlaylist>>>
  ): Promise<void> => {
    return api
      .getUserPlaylists(userId, options)
      .then((response: Response<SpotifyApi.ListOfUsersPlaylistsResponse>) => {
        dispatch(receivePlaylistData(camelize(response.body)));
      });
  };
};
