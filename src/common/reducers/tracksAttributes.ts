import merge from 'lodash/merge';

import { TRACKS_ATTRIBUTES } from 'common/actions';
import { IAction } from 'common/interfaces';

export const tracksAttributesReducer = (
  state: SpotifyApi.MultipleAudioFeaturesResponse | null = null,
  action: IAction<SpotifyApi.MultipleAudioFeaturesResponse>
): SpotifyApi.MultipleAudioFeaturesResponse | null => {
  switch (action.type) {
    case TRACKS_ATTRIBUTES.RECEIVE_TRACKS_ATTRIBUTES:
      return merge({}, state, action.data);

    default:
      return state;
  }
};
