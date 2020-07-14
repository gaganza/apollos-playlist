import SpotifyWebApi from 'spotify-web-api-node';
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';

import { IAction, Response, IRootState } from 'common/interfaces';

export enum TRACKS_ATTRIBUTES {
  RECEIVE_TRACKS_ATTRIBUTES = 'trackAttributes/RECEIVE_TRACKS_ATTRIBUTES',
}

export const receiveTrackAttributes = (
  data: SpotifyApi.MultipleAudioFeaturesResponse
): IAction<SpotifyApi.MultipleAudioFeaturesResponse> => {
  return { type: TRACKS_ATTRIBUTES.RECEIVE_TRACKS_ATTRIBUTES, data };
};

export const fetchTracksAttributes = (
  api: SpotifyWebApi,
  trackIds: string[]
): ThunkAction<Promise<void>, IRootState, unknown, IAction<SpotifyApi.MultipleAudioFeaturesResponse>> => {
  return (dispatch: Dispatch<IAction<SpotifyApi.MultipleAudioFeaturesResponse>>): Promise<void> => {
    return api
      .getAudioFeaturesForTracks(trackIds)
      .then((response: Response<SpotifyApi.MultipleAudioFeaturesResponse>) => {
        dispatch(receiveTrackAttributes(response.body));
      });
  };
};
