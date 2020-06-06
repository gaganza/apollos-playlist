import { combineReducers, Reducer } from "redux";

import { playlistsReducer } from "../components/Playlists/reducer";
import { clientReducer, userReducer } from "../common/reducers";
import { IRootState } from "../common/interfaces";

const rootReducer: Reducer<IRootState> = combineReducers({
  spotifyWebApi: clientReducer,
  user: userReducer,
  playlists: playlistsReducer,
});

export default rootReducer;
