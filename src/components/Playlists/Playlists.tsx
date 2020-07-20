import * as React from 'react';
import { LinearProgress, ThemeProvider, Grid } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import { PlaylistCard } from './subcomponents';
import { PLAYLIST_RESULTS_PER_PAGE } from 'common/constants';
import { TPlaylistsProps, IPlaylistsState } from './interfaces';

import { linearProgresTheme } from 'common/themes';

class Playlists extends React.Component<TPlaylistsProps, IPlaylistsState> {
  public constructor(props: TPlaylistsProps) {
    super(props);

    this.state = {
      page: 1,
      loading: true,
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

    this.setState({ loading: false });
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

  public render(): JSX.Element {
    let { playlists } = this.props;
    let { page, loading } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={3}>
          {loading && (
            <Grid item xs={12}>
              <ThemeProvider theme={linearProgresTheme}>
                <LinearProgress />
              </ThemeProvider>
            </Grid>
          )}

          {playlists &&
            playlists.items[page] &&
            playlists.items[page].map((playlist: SpotifyApi.PlaylistObjectSimplified) => {
              return (
                <Grid item xs={12} md={6} lg={4} xl={3} key={`playlist-card-${playlist.id}`}>
                  <PlaylistCard {...playlist} />
                </Grid>
              );
            })}
        </Grid>
        <br />
        {playlists && playlists.items && (
          <Pagination
            count={Math.floor(playlists.total / PLAYLIST_RESULTS_PER_PAGE)}
            page={page}
            onChange={this.handlePaginationChange}
          />
        )}
      </div>
    );
  }
}

export default Playlists;
