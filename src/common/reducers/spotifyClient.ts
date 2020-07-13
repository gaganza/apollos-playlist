import SpotifyWebApi from 'spotify-web-api-node';

import { clientId, redirectUri } from 'authorization';

import { SPOTIFT_API } from 'common/actions';
import { IAction } from 'common/interfaces';

export function clientReducer(
  state: SpotifyWebApi = new SpotifyWebApi({
    clientId,
    redirectUri,
  }),
  action: IAction<string>
): SpotifyWebApi {
  switch (action.type) {
    case SPOTIFT_API.SET_GLOBAL_SPOTIFY_CLIENT_TOKEN:
      state.setAccessToken(action.data);

      return state;

    default:
      return state;
  }
}
