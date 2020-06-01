import { combineReducers, Reducer } from "redux";
import SpotifyWebApi from "spotify-web-api-node";

import { clientReducer } from "../common/reducers/spotifyClient";

export interface IRootState {
  spotifyWebApi: SpotifyWebApi;
}

const rootReducer: Reducer<IRootState> = combineReducers({
  spotifyWebApi: clientReducer,
});

export default rootReducer;
