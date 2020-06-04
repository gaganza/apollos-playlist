/**
 * External Url Object
 * [](https://developer.spotify.com/web-api/object-model/)
 *
 * Note that there might be other types available, it couldn't be found in the docs.
 */
export interface IExternalUrlObject {
  spotify: string;
}

/**
 * Followers Object
 * [](https://developer.spotify.com/web-api/object-model/)
 */
export interface IFollowersObject {
  /**
   * A link to the Web API endpoint providing full details of the followers; `null` if not available.
   * Please note that this will always be set to `null`, as the Web API does not support it at the moment.
   */
  href: null;
  /**
   * The total number of followers.
   */
  total: number;
}

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

/**
 * User Object (Public)
 * [](https://developer.spotify.com/web-api/object-model/#track-object-simplified)
 */
export interface IUserObjectPublic {
  displayName?: string;
  externalUrls: IExternalUrlObject;
  followers?: IFollowersObject;
  href: string;
  id: string;
  images?: IImageObject[];
  type: "user";
  uri: string;
}

/**
 * User Object (Private)
 * [](https://developer.spotify.com/web-api/object-model/#track-object-simplified)
 */
export interface IUserObjectPrivate extends IUserObjectPublic {
  birthdate: string;
  country: string;
  email: string;
  product: string;
}

export interface ICurrentProfile extends IUserObjectPrivate {}
