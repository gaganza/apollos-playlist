/**
 * Image Object
 * [](https://developer.spotify.com/web-api/object-model/)
 */
export interface IImageObject {
  /**
   * The image height in pixels. If unknown: `null` or not returned.
   */
  height?: number;
  /**
   * The source URL of the image.
   */
  url: string;
  /**
   * The image width in pixels. If unknown: null or not returned.
   */
  width?: number;
}
