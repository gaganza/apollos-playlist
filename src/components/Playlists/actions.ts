import SpotifyWebApi from "spotify-web-api-node";
import camelize from "camelize";
import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";

import { PLAYLIST_RESULTS_PER_PAGE } from "../../common/constants";
import {
  IAction,
  Response,
  IPaginationOptions,
  IPlaylists,
  IPagingObject,
  IRootState,
} from "../../common/interfaces";

export enum PLAYLISTS {
  RECEIVE_PLAYLISTS_DATA = "playlists/RECEIVE_PLAYLISTS_DATA",
}

export const receivePlaylistData = (
  data: IPagingObject<IPlaylists>
): IAction<IPagingObject<IPlaylists>> => {
  return { type: PLAYLISTS.RECEIVE_PLAYLISTS_DATA, data };
};

export const fetchPlaylistsData = (
  api: SpotifyWebApi,
  userId: string,
  options?: IPaginationOptions
): ThunkAction<
  Promise<void>,
  IRootState,
  unknown,
  IAction<IPagingObject<IPlaylists>>
> => {
  return (
    dispatch: Dispatch<IAction<IPagingObject<IPlaylists>>>
  ): Promise<void> => {
    return api
      .getUserPlaylists(userId, options)
      .then((response: Response<SpotifyApi.ListOfUsersPlaylistsResponse>) => {
        let data: IPagingObject<IPlaylists> = {
          total: response.body.total,
          items: {
            [options.offset / PLAYLIST_RESULTS_PER_PAGE + 1]: camelize(
              response.body.items
            ),
          },
        };

        dispatch(receivePlaylistData(data));
      });
  };
};
