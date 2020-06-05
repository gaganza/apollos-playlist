import { combineReducers, Reducer } from "redux";
import SpotifyWebApi from "spotify-web-api-node";

import { clientReducer, userReducer } from "../common/reducers";
import { playlistsReducer } from "../components/Playlists/reducer";
import {
  ICurrentProfile,
  IPlaylist,
  IPagingObject,
} from "../common/interfaces";

export interface IRootState {
  spotifyWebApi: SpotifyWebApi;
  user: ICurrentProfile | null;
  playlists: IPagingObject<IPlaylist> | null;
}

const rootReducer: Reducer<IRootState> = combineReducers({
  spotifyWebApi: clientReducer,
  user: userReducer,
  playlists: playlistsReducer,
});

export default rootReducer;
