import { combineReducers } from 'redux';

import { clientReducer, userReducer, tracksAttributesReducer } from 'common/reducers';
import { playlistsReducer } from 'components/Playlists/reducer';
import { playlistReducer } from 'components/Playlist/reducer';
import { topArtistsReducer } from 'components/TopArtists/reducer';
import { snackBarReducer } from 'components/Snackbar/reducer';

export default combineReducers({
  spotifyWebApi: clientReducer,
  user: userReducer,
  playlists: playlistsReducer,
  playlist: playlistReducer,
  tracksAttributes: tracksAttributesReducer,
  topArtists: topArtistsReducer,
  snackbar: snackBarReducer,
});
