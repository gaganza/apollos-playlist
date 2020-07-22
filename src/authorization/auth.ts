export const authEndpoint: string = 'https://accounts.spotify.com/authorize?';

export const scopes: string[] = [
  'playlist-read-collaborative',
  'playlist-modify-public',
  'user-top-read',
  'playlist-read-private',
  'playlist-modify-private',
];

export const responseType: string = 'token';

export const clientSecret: string =
  process.env.NODE_ENV === 'development' ? 'fc20b72c74f74a1c8fd2b30269efe82c' : 'c96b4f7d709c49d6aa0f57f49aa4ab5b';

export const clientId: string =
  process.env.NODE_ENV === 'development' ? 'a91af95c5d8c4e178920646664034328' : 'a5c714fac13f4b5c924497c3b9e533a2';

export const redirectUri: string =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://gaganza.github.io/apollos-playlist/';
