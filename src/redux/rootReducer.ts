import { combineReducers } from 'redux';

import { clientReducer, userReducer } from 'common/reducers';
import { playlistsReducer } from 'components/Playlists/reducer';
import { playlistReducer } from 'components/Playlist/reducer';

export default combineReducers({
  spotifyWebApi: clientReducer,
  user: userReducer,
  playlists: playlistsReducer,
  playlist: playlistReducer,
});
