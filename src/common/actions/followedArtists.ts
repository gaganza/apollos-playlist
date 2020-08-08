import SpotifyWebApi from 'spotify-web-api-node';
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import { IAction, IRootState, Response } from 'common/interfaces';

export enum FOLLOWED_ARTISTS {
  RECEIVE = 'followedArtists/RECEIVE',
}

export const receiveFollowedArtists = (
  data: SpotifyApi.UsersFollowedArtistsResponse
): IAction<SpotifyApi.UsersFollowedArtistsResponse> => {
  return {
    type: FOLLOWED_ARTISTS.RECEIVE,
    data,
  };
};

export const fetchFollowedArtists = (
  api: SpotifyWebApi
): ThunkAction<Promise<void>, IRootState, unknown, IAction<SpotifyApi.UsersFollowedArtistsResponse>> => {
  return (dispatch: Dispatch<IAction<SpotifyApi.UsersFollowedArtistsResponse>>): Promise<void> => {
    return api.getFollowedArtists({ limit: 50 }).then((response: Response<SpotifyApi.UsersFollowedArtistsResponse>) => {
      dispatch(receiveFollowedArtists(response.body));
    });
  };
};
