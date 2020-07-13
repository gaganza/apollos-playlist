import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead/TableHead';
import TableRow from '@material-ui/core/TableRow/TableRow';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';

import { TPlaylistProps } from './interfaces';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableBody from '@material-ui/core/TableBody/TableBody';

class Playlist extends React.PureComponent<TPlaylistProps> {
  public constructor(props: TPlaylistProps) {
    super(props);
  }

  public componentDidMount(): void {
    let { location, spotifyWebApi, fetchPlaylist } = this.props;

    let playlistId: string = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

    fetchPlaylist(spotifyWebApi, playlistId);
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
    let { playlist } = this.props;

    if (!playlist) return null;

    return (
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          {this.renderPlaylistArtwork(playlist)}
        </Grid>
        <Grid item xs={12} md={7}>
          {this.renderPlaylistName(playlist)}
          <br />
          {this.renderPlaylistOwner(playlist)}
        </Grid>
        <Grid item xs={12}>
          {this.renderTracks(playlist)}
        </Grid>
      </Grid>
    );
  }
}

export default Playlist;
