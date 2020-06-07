import { IExternalUrlObject } from ".";

/**
 * Context Object
 * [](https://developer.spotify.com/web-api/object-model/#context-object)
 */
export interface IContextObject {
  /**
   * The object type.
   */
  type: "artist" | "playlist" | "album";
  /**
   * A link to the Web API endpoint providing full details.
   */
  href: string;
  /**
   * Known external URLs.
   */
  externalUrls: IExternalUrlObject;
  /**
   * The [Spotify URI](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids).
   */
  uri: string;
}
