import merge from 'lodash/merge';

import { FOLLOWED_ARTISTS } from 'common/actions/followedArtists';
import { IAction } from 'common/interfaces';

export const followedArtistsReducer = (
  state: SpotifyApi.UsersFollowedArtistsResponse | null = null,
  action: IAction<SpotifyApi.UsersFollowedArtistsResponse>
): SpotifyApi.UsersFollowedArtistsResponse | null => {
  switch (action.type) {
    case FOLLOWED_ARTISTS.RECEIVE: {
      return merge({}, state, action.data);
    }

    default:
      return state;
  }
};
