import merge from 'lodash/merge';

import { TOP_ARTISTS } from 'common/actions/topArtists';
import { IAction } from 'common/interfaces';

export const topArtistsReducer = (
  state: ITopArtistsReducer | null = null,
  action: IAction<SpotifyApi.UsersTopArtistsResponse>
): ITopArtistsReducer | null => {
  switch (action.type) {
    case TOP_ARTISTS.RECEIVE_TOP_ARTISTS_LONG_TERM:
      return merge({}, state, { longTerm: action.data });

    case TOP_ARTISTS.RECEIVE_TOP_ARTISTS_MEDIUM_TERM:
      return merge({}, state, { mediumTerm: action.data });

    case TOP_ARTISTS.RECEIVE_TOP_ARTISTS_SHORT_TERM:
      return merge({}, state, { shortTerm: action.data });

    default:
      return state;
  }
};

export interface ITopArtistsReducer {
  longTerm: SpotifyApi.UsersTopArtistsResponse | null;
  mediumTerm: SpotifyApi.UsersTopArtistsResponse | null;
  shortTerm: SpotifyApi.UsersTopArtistsResponse | null;
}
