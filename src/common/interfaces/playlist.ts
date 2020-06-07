import { IPlaylistBaseObject, IFollowersObject } from ".";
import { IPlaylistTrack } from "./playlistTrack";

/**
 * Playlist Object Full
 * [](https://developer.spotify.com/web-api/object-model/#playlist-object-full)
 */
export interface IPlaylist extends IPlaylistBaseObject {
  /**
   * The playlist description. Only returned for modified, verified playlists, otherwise null.
   */
  description: string | null;
  /**
   * Information about the followers of the playlist.
   */
  followers: IFollowersObject;
  /**
   * Information about the tracks of the playlist.
   */
  tracks: PagingObject<IPlaylistTrack>;
}

interface PagingObject<T> {
  href: string;
  items: T[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}
