import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import { TPlaylistProps } from './interfaces';

class Playlist extends React.PureComponent<TPlaylistProps> {
  public constructor(props: TPlaylistProps) {
    super(props);
  }

  public componentDidMount(): void {
    let { location, spotifyWebApi, fetchPlaylist } = this.props;

    let playlistId: string = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

    fetchPlaylist(spotifyWebApi, playlistId);
  }

  public render(): JSX.Element | null {
    let { playlist } = this.props;

    if (!playlist) return null;

    return (
      <Grid container spacing={3}>
        Hello World
      </Grid>
    );
  }
}

export default Playlist;
