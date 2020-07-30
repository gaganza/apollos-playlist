import { IAudioFeatures } from 'common/interfaces';

export const playlistToTrackIds = (playlist: SpotifyApi.SinglePlaylistResponse): string[] => {
  return playlist.tracks.items.map((item: SpotifyApi.PlaylistTrackObject) => {
    return item.track.id;
  });
};

export const normalizeTrackAudioFeature = (
  tracksAttributes: SpotifyApi.MultipleAudioFeaturesResponse
): IAudioFeatures => {
  let normalized: IAudioFeatures = {
    acousticness: 0.0,
    danceability: 0.0,
    energy: 0.0,
    instrumentalness: 0.0,
    valence: 0.0,
  };

  let count: number = tracksAttributes.audio_features.length;

  tracksAttributes.audio_features.forEach((feature: SpotifyApi.AudioFeaturesObject) => {
    if (feature) {
      normalized.acousticness += feature.acousticness;
      normalized.danceability += feature.danceability;
      normalized.energy += feature.energy;
      normalized.instrumentalness += feature.instrumentalness;
      normalized.valence += feature.valence;
    }
  });

  normalized.acousticness = (normalized.acousticness / count) * 100;
  normalized.danceability = (normalized.danceability / count) * 100;
  normalized.energy = (normalized.energy / count) * 100;
  normalized.instrumentalness = (normalized.instrumentalness / count) * 100;
  normalized.valence = (normalized.valence / count) * 100;

  return normalized;
};
