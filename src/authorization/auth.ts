/*
  Safe to expost these auth credentials due to the grant flow I am following:
  
  """
  Implicit grant flow is for clients that are implemented entirely using JavaScript and running in the resource owner’s
  browser. You do not need any server-side code to use it. Rate limits for requests are improved but there is no
  refresh token provided. 
  """

  https://developer.spotify.com/documentation/general/guides/authorization-guide/
*/

export const authEndpoint: string = 'https://accounts.spotify.com/authorize?';

export const scopes: string[] = [
  'playlist-read-collaborative',
  'playlist-modify-public',
  'user-top-read',
  'playlist-read-private',
  'playlist-modify-private',
  'user-follow-read',
  'user-read-recently-played',
  'user-library-read',
];

export const responseType: string = 'token';

export const clientId: string =
  process.env.NODE_ENV === 'development' ? 'a91af95c5d8c4e178920646664034328' : 'a5c714fac13f4b5c924497c3b9e533a2';

export const redirectUri: string =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://gaganza.github.io/apollos-playlist/';
