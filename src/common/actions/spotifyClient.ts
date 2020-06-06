import { IAction } from "../interfaces";

export enum SPOTIFT_API {
  SET_GLOBAL_SPOTIFY_CLIENT_TOKEN = "spotifyApi/SET_GLOBAL_SPOTIFY_CLIENT_TOKEN",
}

export const setGlobalSpotifyClient = (token: string): IAction<string> => {
  return {
    type: SPOTIFT_API.SET_GLOBAL_SPOTIFY_CLIENT_TOKEN,
    data: token,
  };
};
