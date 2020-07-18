import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import SpotifyWebApi from 'spotify-web-api-node';

import { clientId, redirectUri } from 'authorization';

import { initialSnackbarState } from 'components/Snackbar/reducer';
import rootReducer from './rootReducer';
import { IRootState } from 'common/interfaces';

const defaultState: IRootState = {
  spotifyWebApi: new SpotifyWebApi({
    clientId,
    redirectUri,
  }),
  user: null,
  playlist: null,
  playlists: null,
  tracksAttributes: null,
  topArtists: null,
  snackbar: initialSnackbarState,
};

const configureStore = (preloadedState: IRootState = defaultState): Store<IRootState> => {
  return createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)));
};

export default configureStore;
