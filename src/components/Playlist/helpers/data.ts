import { IPlaylist, IAudioFeatures } from "../../../common/interfaces";

export const averageAndNormalizeAudioFeatures = (
  playlist: IPlaylist,
  trackAudioFeatures: IAudioFeatures[]
): Partial<IAudioFeatures> => {
  let averages: Partial<IAudioFeatures> = {
    acousticness: 0,
    danceability: 0,
    energy: 0,
    instrumentalness: 0,
    liveness: 0,
    speechiness: 0,
    tempo: 0,
    valence: 0,
  };

  trackAudioFeatures.forEach((trackAudioFeature) => {
    averages.acousticness += trackAudioFeature.acousticness;
    averages.danceability += trackAudioFeature.danceability;
    averages.energy += trackAudioFeature.energy;
    averages.instrumentalness += trackAudioFeature.instrumentalness;
    averages.liveness += trackAudioFeature.liveness;
    averages.speechiness += trackAudioFeature.speechiness;
    averages.tempo += trackAudioFeature.tempo;
    averages.valence += trackAudioFeature.valence;
  });

  averages.acousticness = (averages.acousticness / playlist.tracks.total) * 100;
  averages.danceability = (averages.danceability / playlist.tracks.total) * 100;
  averages.energy = (averages.energy / playlist.tracks.total) * 100;
  averages.instrumentalness =
    (averages.instrumentalness / playlist.tracks.total) * 100;
  averages.liveness = (averages.liveness / playlist.tracks.total) * 100;
  averages.speechiness = (averages.speechiness / playlist.tracks.total) * 100;
  averages.tempo = averages.tempo / playlist.tracks.total;
  averages.valence = (averages.valence / playlist.tracks.total) * 100;

  return averages;
};
