import { combineReducers } from 'redux';

import { clientReducer, userReducer, tracksAttributesReducer } from 'common/reducers';
import { playlistsReducer } from 'components/Playlists/reducer';
import { playlistReducer } from 'components/Playlist/reducer';
import { topArtistsReducer } from 'components/TopArtists/reducer';

export default combineReducers({
  spotifyWebApi: clientReducer,
  user: userReducer,
  playlists: playlistsReducer,
  playlist: playlistReducer,
  tracksAttributes: tracksAttributesReducer,
  topArtists: topArtistsReducer,
});
