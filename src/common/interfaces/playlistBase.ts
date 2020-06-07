import { IContextObject, IImageObject, IUserObjectPublic } from ".";

/**
 * Base Playlist Object. Does not in itself exist in Spotify Web Api,
 * but needs to be made since the tracks types vary in the Full and Simplified versions.
 */
export interface IPlaylistBaseObject extends IContextObject {
  /**
   * Returns `true` if context is not search and the owner allows other users to modify the playlist.
   * Otherwise returns `false`.
   */
  collaborative: boolean;
  /**
   * The [Spotify ID](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids) for the playlist.
   */
  id: string;
  /**
   * Images for the playlist. The array may be empty or contain up to three images.
   * The images are returned by size in descending order.
   * See [Working with Playlists](https://developer.spotify.com/documentation/general/guides/working-with-playlists/).
   * Note: If returned, the source URL for the image (`url`) is temporary and will expire in less than a day.
   */
  images: IImageObject[];
  /**
   * The name of the playlist.
   */
  name: string;
  /**
   * The user who owns the playlist.
   */
  owner: IUserObjectPublic;
  /**
   * The playlist’s public/private status:
   * `true` the playlist is public,
   * `false` the playlist is private,
   * or `null` the playlist status is not relevant.
   */
  public: boolean | null;
  /**
   * The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version:
   * see [Remove tracks from a playlist](https://developer.spotify.com/documentation/web-api/reference/playlists/remove-tracks-playlist/).
   */
  snapshotId: string;
  type: "playlist";
}
