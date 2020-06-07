import { ITrack } from "./track";

/**
 * The Track Object in Playlists
 * [](https://developer.spotify.com/web-api/object-model/)
 */
export interface IPlaylistTrack {
  // added_at: string;
  // added_by: UserObjectPublic;
  isLocal: boolean;
  track: ITrack;
}
