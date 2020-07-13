import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';

import { PlaylistCard } from './subcomponents';
import { PLAYLIST_RESULTS_PER_PAGE } from 'common/constants';
import { TPlaylistsProps, IPlaylistsState } from './interfaces';

import './styles.scss';

class Playlists extends React.Component<TPlaylistsProps, IPlaylistsState> {
  public constructor(props: TPlaylistsProps) {
    super(props);

    this.state = {
      page: 1,
    };
  }

  public async componentDidMount(): Promise<void> {
    let { location, spotifyWebApi, fetchPlaylists, user, playlists } = this.props;

    // no URL params
    if (location.search === '') {
      if (playlists === null) {
        await fetchPlaylists(spotifyWebApi, user!.id, {
          limit: PLAYLIST_RESULTS_PER_PAGE,
          offset: 0,
        });
      }
    }
  }

  public handlePaginationChange = (_: React.ChangeEvent<unknown>, page: number) => {
    let { fetchPlaylists, spotifyWebApi, user, playlists } = this.props;
    if (playlists!.items[page] === undefined) {
      fetchPlaylists(spotifyWebApi, user!.id, {
        limit: PLAYLIST_RESULTS_PER_PAGE,
        offset: (page - 1) * PLAYLIST_RESULTS_PER_PAGE,
      });
    }
    this.setState({ page });
  };

  public render(): JSX.Element | null {
    let { playlists } = this.props;
    let { page } = this.state;

    if (playlists && playlists.items) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Grid container spacing={3}>
            {playlists.items[page] &&
              playlists.items[page].map((playlist: SpotifyApi.PlaylistObjectSimplified) => {
                return (
                  <Grid item xs={12} md={6} lg={4} xl={3} key={playlist.id}>
                    <PlaylistCard {...playlist} />
                  </Grid>
                );
              })}
          </Grid>
          <br />
          <Pagination
            count={Math.floor(playlists.total / PLAYLIST_RESULTS_PER_PAGE)}
            page={page}
            onChange={this.handlePaginationChange}
          />
        </div>
      );
    }

    return null;
  }
}

export default Playlists;
