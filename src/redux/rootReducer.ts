import { combineReducers } from "redux";

import { playlistsReducer } from "../components/Playlists/reducer";
import { clientReducer, userReducer } from "../common/reducers";

export default combineReducers({
  spotifyWebApi: clientReducer,
  user: userReducer,
  playlists: playlistsReducer,
});

