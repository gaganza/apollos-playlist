import SpotifyWebApi from 'spotify-web-api-node';
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import { IAction, IRootState, Response } from 'common/interfaces';

export enum TOP_ARTISTS {
  RECEIVE_TOP_ARTISTS_LONG_TERM = 'topArtsits/RECEIVE_TOP_ARTISTS_LONG_TERM',
  RECEIVE_TOP_ARTISTS_MEDIUM_TERM = 'topArtsits/RECEIVE_TOP_ARTISTS_MEDIUM_TERM',
  RECEIVE_TOP_ARTISTS_SHORT_TERM = 'topArtsits/RECEIVE_TOP_ARTISTS_SHORT_TERM',
}

export const receiveTopArtistsLongTerm = (
  data: SpotifyApi.UsersTopArtistsResponse
): IAction<SpotifyApi.UsersTopArtistsResponse> => {
  return { type: TOP_ARTISTS.RECEIVE_TOP_ARTISTS_LONG_TERM, data };
};

export const receiveTopArtistsMediumTerm = (
  data: SpotifyApi.UsersTopArtistsResponse
): IAction<SpotifyApi.UsersTopArtistsResponse> => {
  return { type: TOP_ARTISTS.RECEIVE_TOP_ARTISTS_MEDIUM_TERM, data };
};

export const receiveTopArtistsShortTerm = (
  data: SpotifyApi.UsersTopArtistsResponse
): IAction<SpotifyApi.UsersTopArtistsResponse> => {
  return { type: TOP_ARTISTS.RECEIVE_TOP_ARTISTS_SHORT_TERM, data };
};

export const fetchTopArtists = (
  api: SpotifyWebApi,
  timeRange: 'long_term' | 'medium_term' | 'short_term'
): ThunkAction<Promise<void>, IRootState, unknown, IAction<SpotifyApi.UsersTopArtistsResponse>> => {
  return (dispatch: Dispatch<IAction<SpotifyApi.UsersTopArtistsResponse>>): Promise<void> => {
    return api
      .getMyTopArtists({ time_range: timeRange })
      .then((response: Response<SpotifyApi.UsersTopArtistsResponse>) => {
        if (timeRange === 'long_term') {
          dispatch(receiveTopArtistsLongTerm(response.body));
        } else if (timeRange === 'medium_term') {
          dispatch(receiveTopArtistsMediumTerm(response.body));
        } else {
          dispatch(receiveTopArtistsShortTerm(response.body));
        }
      });
  };
};
