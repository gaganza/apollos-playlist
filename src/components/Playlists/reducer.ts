import { PLAYLISTS } from "./actions";
import { IAction, IPagingObject, IPlaylist } from "../../common/interfaces";

export function playlistsReducer(
  state: IPagingObject<IPlaylist> = null,
  action: IAction<IPagingObject<IPlaylist>>
): IPagingObject<IPlaylist> {
  switch (action.type) {
    case PLAYLISTS.RECEIVE_PLAYLIST_DATA:
      return action.data;

    default:
      return state;
  }
}
