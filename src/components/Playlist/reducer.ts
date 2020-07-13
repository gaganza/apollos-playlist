import merge from 'lodash/merge';

import { PLAYLIST } from './actions';
import { IAction } from 'common/interfaces';

export function playlistReducer(
  state: SpotifyApi.SinglePlaylistResponse | null = null,
  action: IAction<SpotifyApi.SinglePlaylistResponse>
): SpotifyApi.SinglePlaylistResponse | null {
  switch (action.type) {
    case PLAYLIST.RECEIVE_PLAYLIST:
      return merge({}, state, action.data);

    default:
      return state;
  }
}
