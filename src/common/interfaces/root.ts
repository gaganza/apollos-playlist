import SpotifyWebApi from "spotify-web-api-node";
import { ICurrentProfile, IPagingObject, IPlaylist } from ".";

export interface IRootState {
  spotifyWebApi: SpotifyWebApi;
  user: ICurrentProfile | null;
  playlists: IPagingObject<IPlaylist> | null;
}
