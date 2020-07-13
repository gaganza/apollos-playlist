import SpotifyWebApi from 'spotify-web-api-node';
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';

import { IAction, Response, IRootState } from '../../common/interfaces';

export enum PLAYLIST {
  RECEIVE_PLAYLIST = 'playlist/RECEIVE_PLAYLIST',
}

export const receivePlaylist = (
  data: SpotifyApi.SinglePlaylistResponse
): IAction<SpotifyApi.SinglePlaylistResponse> => {
  return { type: PLAYLIST.RECEIVE_PLAYLIST, data };
};

export const fetchPlaylist = (
  api: SpotifyWebApi,
  playlistId: string
): ThunkAction<Promise<void>, IRootState, unknown, IAction<SpotifyApi.SinglePlaylistResponse>> => {
  return (dispatch: Dispatch<IAction<SpotifyApi.SinglePlaylistResponse>>): Promise<void> => {
    return api.getPlaylist(playlistId).then((response: Response<SpotifyApi.SinglePlaylistResponse>) => {
      dispatch(receivePlaylist(response.body));
    });
  };
};
