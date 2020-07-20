import merge from 'lodash/merge';

import { PLAYLISTS } from './actions';
import { IAction, IPagingObject } from 'common/interfaces';

export const playlistsReducer = (
  state: IPagingObject<SpotifyApi.PlaylistObjectSimplified> | null = null,
  action: IAction<IPagingObject<SpotifyApi.PlaylistObjectSimplified>>
): IPagingObject<SpotifyApi.PlaylistObjectSimplified> | null => {
  switch (action.type) {
    case PLAYLISTS.RECEIVE_PLAYLISTS:
      return merge({}, state, action.data);

    case PLAYLISTS.CLEAR:
      return null;

    default:
      return state;
  }
};
