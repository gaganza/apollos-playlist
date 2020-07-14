import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead/TableHead';
import TableRow from '@material-ui/core/TableRow/TableRow';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableBody from '@material-ui/core/TableBody/TableBody';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';

import { capitalizeFirstLetter } from 'common/helpers';
import { playlistToTrackIds, normalizeTrackAudioFeature } from './helpers';
import { TPlaylistProps } from './interfaces';

import { linearProgresTheme } from './themes';
import { ThemeProvider } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress';
import { INormalizeAudioFeatures } from 'common/interfaces/tracksAttributes';

class Playlist extends React.PureComponent<TPlaylistProps> {
  public constructor(props: TPlaylistProps) {
    super(props);
  }

  public componentDidMount(): void {
    window.scrollTo(0, 0);
    let { location, spotifyWebApi, fetchPlaylist, fetchTracksAttributes } = this.props;

    let playlistId: string = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

    if (playlistId !== this.props.playlist?.id) {
      fetchPlaylist(spotifyWebApi, playlistId).then(() => {
        let { playlist } = this.props;

        if (!playlist) return;
        fetchTracksAttributes(spotifyWebApi, playlistToTrackIds(playlist));
      });
    }
  }

  public renderPlaylistArtwork(playlist: SpotifyApi.SinglePlaylistResponse): JSX.Element | null {
    if (!playlist || !playlist.images || playlist.images.length === 0) return null;

    return (
      <img
        src={playlist.images[0].url}
        style={{ maxWidth: '300px', maxHeight: '300px ' }}
        alt={`${playlist.name} playlist artwork`}
      />
    );
  }

  public renderPlaylistName(playlist: SpotifyApi.SinglePlaylistResponse): JSX.Element | null {
    if (!playlist) return null;

    return <Typography>{playlist.name}</Typography>;
  }

  public renderPlaylistOwner(playlist: SpotifyApi.SinglePlaylistResponse): JSX.Element | null {
    if (!playlist) return null;

    return (
      <div style={{ display: 'flex', alignItems: 'row' }}>
        <PersonIcon />
        <Typography>{playlist.owner.display_name}</Typography>
      </div>
    );
  }

  public renderAttributeBar(
    normalizedData: INormalizeAudioFeatures,
    attribute: keyof INormalizeAudioFeatures
  ): JSX.Element {
    return (
      <div>
        <Typography>{capitalizeFirstLetter(attribute)}</Typography>
        <ThemeProvider theme={linearProgresTheme}>
          <LinearProgress variant="determinate" value={normalizedData[attribute]} />
        </ThemeProvider>
      </div>
    );
  }

  public renderPlaylistAnalysis(tracksAttributes: SpotifyApi.MultipleAudioFeaturesResponse): JSX.Element | null {
    if (!tracksAttributes) return null;

    let normalizedData: INormalizeAudioFeatures = normalizeTrackAudioFeature(tracksAttributes);

    return (
      <Grid container spacing={1} direction={'column'}>
        <Grid item>{this.renderAttributeBar(normalizedData, 'acousticness')}</Grid>
        <Grid item>{this.renderAttributeBar(normalizedData, 'danceability')}</Grid>
        <Grid item>{this.renderAttributeBar(normalizedData, 'energy')}</Grid>
        <Grid item>{this.renderAttributeBar(normalizedData, 'instrumentalness')}</Grid>
        <Grid item>{this.renderAttributeBar(normalizedData, 'valence')}</Grid>
      </Grid>
    );
  }

  public renderTracks(playlist: SpotifyApi.SinglePlaylistResponse): JSX.Element | null {
    if (!playlist) return null;

    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography>Title</Typography>
              </TableCell>
              <TableCell>
                <Typography>Artist</Typography>
              </TableCell>
              <TableCell>
                <Typography>Album</Typography>
              </TableCell>
              <TableCell>
                <Typography>Length</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {playlist.tracks.items.map((track: SpotifyApi.PlaylistTrackObject) => (
              <TableRow>
                <TableCell>{track.track.name}</TableCell>
                <TableCell>{track.track.artists[0].name}</TableCell>
                <TableCell>{track.track.album.name}</TableCell>
                <TableCell>{track.track.duration_ms}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  public render(): JSX.Element | null {
    let { location, playlist, tracksAttributes } = this.props;

    let playlistId: string = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

    if (!playlist || playlist.id !== playlistId) return null;
    if (!tracksAttributes) return null;

    return (
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          {this.renderPlaylistArtwork(playlist)}
        </Grid>
        <Grid item xs={12} md={7}>
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
  }
}

export default Playlist;
