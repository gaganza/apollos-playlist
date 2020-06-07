import { IImageObject, IExternalUrlObject, IFollowersObject } from ".";

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
