import merge from "lodash/merge";

import { PLAYLISTS } from "./actions";
import { IAction, IPagingObject, IPlaylists } from "../../common/interfaces";

export function playlistsReducer(
  state: IPagingObject<IPlaylists> = null,
  action: IAction<IPagingObject<IPlaylists>>
): IPagingObject<IPlaylists> {
  switch (action.type) {
    case PLAYLISTS.RECEIVE_PLAYLISTS_DATA:
      return merge({}, state, action.data);

    default:
      return state;
  }
}
