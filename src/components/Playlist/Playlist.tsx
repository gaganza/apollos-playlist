import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Table, TableContainer, TableRow, TableCell, TableBody, Typography, LinearProgress } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { ThemeProvider } from '@material-ui/core/styles';

import { capitalizeFirstLetter, millisecondsToViewableFormat } from 'common/helpers';
import { playlistToTrackIds, normalizeTrackAudioFeature } from './helpers';
import { IAudioFeatures } from 'common/interfaces';
import { TPlaylistProps, IPlaylistState } from './interfaces';

import { tableTheme, linearProgresTheme } from 'common/themes';

class Playlist extends React.Component<TPlaylistProps, IPlaylistState> {
  public constructor(props: TPlaylistProps) {
    super(props);

    this.state = { loading: true };
  }

  public componentDidMount = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let { location, spotifyWebApi, fetchPlaylist, fetchTracksAttributes } = this.props;

    let playlistId: string = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

    if (playlistId !== this.props.playlist?.id) {
      fetchPlaylist(spotifyWebApi, playlistId).then(() => {
        let { playlist } = this.props;

        if (!playlist) return;
        fetchTracksAttributes(spotifyWebApi, playlistToTrackIds(playlist));
      });
    }

    this.setState({ loading: false });
  };

  public renderPlaylistArtwork = (playlist: SpotifyApi.SinglePlaylistResponse): JSX.Element | null => {
    if (!playlist || !playlist.images || playlist.images.length === 0) return null;

    return (
      <img
        src={playlist.images[0].url}
        style={{ maxWidth: '300px', maxHeight: '300px ' }}
        alt={`${playlist.name} playlist artwork`}
      />
    );
  };

  public renderPlaylistName = (playlist: SpotifyApi.SinglePlaylistResponse): JSX.Element | null => {
    if (!playlist) return null;

    return <Typography>{playlist.name}</Typography>;
  };

  public renderPlaylistOwner = (playlist: SpotifyApi.SinglePlaylistResponse): JSX.Element | null => {
    if (!playlist) return null;

    return (
      <div style={{ display: 'flex', alignItems: 'row' }}>
        <PersonIcon />
        <Typography>{playlist.owner.display_name}</Typography>
      </div>
    );
  };

  public renderAttributeBar = (normalizedData: IAudioFeatures, attribute: keyof IAudioFeatures): JSX.Element => {
    return (
      <div>
        <Typography>{capitalizeFirstLetter(attribute)}</Typography>
        <ThemeProvider theme={linearProgresTheme}>
          <LinearProgress variant="determinate" value={normalizedData[attribute]} />
        </ThemeProvider>
      </div>
    );
  };

  public renderPlaylistAnalysis = (tracksAttributes: SpotifyApi.MultipleAudioFeaturesResponse): JSX.Element | null => {
    if (!tracksAttributes) return null;

    let normalizedData: IAudioFeatures = normalizeTrackAudioFeature(tracksAttributes);

    return (
      <Grid container spacing={1} direction={'column'}>
        <Grid item>{this.renderAttributeBar(normalizedData, 'acousticness')}</Grid>
        <Grid item>{this.renderAttributeBar(normalizedData, 'danceability')}</Grid>
        <Grid item>{this.renderAttributeBar(normalizedData, 'energy')}</Grid>
        <Grid item>{this.renderAttributeBar(normalizedData, 'instrumentalness')}</Grid>
        <Grid item>{this.renderAttributeBar(normalizedData, 'valence')}</Grid>
      </Grid>
    );
  };

  public renderTracks = (playlist: SpotifyApi.SinglePlaylistResponse): JSX.Element | null => {
    if (!playlist) return null;

    return (
      <ThemeProvider theme={tableTheme}>
        <TableContainer>
          <Table>
            <TableBody>
              {playlist.tracks.items.map((track: SpotifyApi.PlaylistTrackObject) => (
                <TableRow hover key={`table-row-${track.track.id}`}>
                  <TableCell style={{ width: '50px' }}>
                    <img
                      style={{ maxHeight: '50px', maxWidth: '50px' }}
                      src={
                        track.track.album.images && track.track.album.images[0] && track.track.album.images[0].url
                          ? track.track.album.images[0].url
                          : ''
                      }
                      alt={'Album artwork for the song'}
                    />
                  </TableCell>
                  <TableCell style={{ display: 'felx', flexDirection: 'column' }}>
                    <div>{track.track.name}</div>
                    <div>
                      {track.track.artists[0].name} - {track.track.album.name}
                    </div>
                  </TableCell>
                  <TableCell>{millisecondsToViewableFormat(track.track.duration_ms)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    );
  };

  public render = (): JSX.Element | null => {
    let { location, playlist, tracksAttributes } = this.props;
    let { loading } = this.state;

    let playlistId: string = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

    if (!playlist || playlist.id !== playlistId) return null;
    if (!tracksAttributes) return null;

    return (
      <Grid container spacing={3}>
        {loading && (
          <Grid item xs={12}>
            <ThemeProvider theme={linearProgresTheme}>
              <LinearProgress />
            </ThemeProvider>
          </Grid>
        )}

        <Grid item xs={12} md={6}>
          {this.renderPlaylistArtwork(playlist)}
        </Grid>
        <Grid item xs={12} md={6}>
          {this.renderPlaylistName(playlist)}
          <br />
          {this.renderPlaylistOwner(playlist)}
          <br />
          {this.renderPlaylistAnalysis(tracksAttributes)}
        </Grid>
        <Grid item xs={12}>
          {this.renderTracks(playlist)}
        </Grid>
      </Grid>
    );
  };
}

export default Playlist;
