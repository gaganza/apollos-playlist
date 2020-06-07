import { IPlaylistBaseObject } from ".";

/**
 * Playlist Object Simplified
 * [](https://developer.spotify.com/web-api/object-model/)
 */
export interface IPlaylists extends IPlaylistBaseObject {
  tracks: {
    href: string;
    total: number;
  };
}
