export const authEndpoint: string = 'https://accounts.spotify.com/authorize?';

export const scopes: string[] = [
  'playlist-read-collaborative',
  'playlist-modify-public',
  'user-top-read',
  'playlist-read-private',
  'playlist-modify-private',
];

export const responseType: string = 'token';

export const clientId: string = process.env.REACT_APP_SPOTIFY_CLIENT_ID!;

export const redirectUri: string =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://gaganza.github.io/apollos-playlist/';
