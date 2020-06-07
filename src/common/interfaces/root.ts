import SpotifyWebApi from "spotify-web-api-node";
import { ICurrentProfile, IPagingObject, IPlaylists } from ".";

export interface IRootState {
  spotifyWebApi: SpotifyWebApi;
  user: ICurrentProfile | null;
  playlists: IPagingObject<IPlaylists> | null;
}
