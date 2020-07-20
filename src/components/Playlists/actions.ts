import SpotifyWebApi from 'spotify-web-api-node';
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';

import { PLAYLIST_RESULTS_PER_PAGE } from 'common/constants';
import { IAction, Response, IPagingObject, IRootState, IPaginationOptions } from 'common/interfaces';

export enum PLAYLISTS {
  RECEIVE_PLAYLISTS = 'playlists/RECEIVE_PLAYLISTS',
  CLEAR = 'playlist/CLEAR',
}

export const receivePlaylist = (
  data: IPagingObject<SpotifyApi.PlaylistObjectSimplified>
): IAction<IPagingObject<SpotifyApi.PlaylistObjectSimplified>> => {
  return { type: PLAYLISTS.RECEIVE_PLAYLISTS, data };
};

export const clearPlaylist = (): IAction<unknown> => {
  return { type: PLAYLISTS.CLEAR, data: undefined };
};

export const fetchPlaylists = (
  api: SpotifyWebApi,
  userId: string,
  options: IPaginationOptions
): ThunkAction<Promise<void>, IRootState, unknown, IAction<IPagingObject<SpotifyApi.PlaylistObjectSimplified>>> => {
  return (dispatch: Dispatch<IAction<IPagingObject<SpotifyApi.PlaylistObjectSimplified>>>): Promise<void> => {
    return api.getUserPlaylists(userId, options).then((response: Response<SpotifyApi.ListOfUsersPlaylistsResponse>) => {
      let data: IPagingObject<SpotifyApi.PlaylistObjectSimplified> = {
        total: response.body.total,
        items: {
          [options.offset / PLAYLIST_RESULTS_PER_PAGE + 1]: response.body.items,
        },
      };

      dispatch(receivePlaylist(data));
    });
  };
};
