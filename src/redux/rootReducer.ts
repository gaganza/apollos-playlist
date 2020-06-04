import { combineReducers, Reducer } from "redux";
import SpotifyWebApi from "spotify-web-api-node";

import { clientReducer, userReducer } from "../common/reducers";
import { ICurrentProfile } from "../common/interfaces";

export interface IRootState {
  spotifyWebApi: SpotifyWebApi;
  user: ICurrentProfile | null;
}

const rootReducer: Reducer<IRootState> = combineReducers({
  spotifyWebApi: clientReducer,
  user: userReducer,
});

export default rootReducer;
