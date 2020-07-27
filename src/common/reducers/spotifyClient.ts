import SpotifyWebApi from 'spotify-web-api-node';

import { clientId, redirectUri } from 'authorization';

export const clientReducer = (
  state: SpotifyWebApi = new SpotifyWebApi({
    clientId,
    redirectUri,
  })
): SpotifyWebApi => {
  return state;
};
