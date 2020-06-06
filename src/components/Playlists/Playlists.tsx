import * as React from "react";

import { Grid } from "@material-ui/core";

import { PlaylistCard } from "./subcomponents";
import { IPlaylist } from "../../common/interfaces";
import { TPlaylistsProps, IPlaylistsState } from "./interfaces";

import "./styles.scss";

class Playlists extends React.PureComponent<TPlaylistsProps, IPlaylistsState> {
  public async componentDidMount(): Promise<void> {
    let { location, spotifyWebApi, fetchPlaylistData, user } = this.props;
    // no URL params
    if (location.search === "") {
      await fetchPlaylistData(spotifyWebApi, user.id, {
        limit: 12,
        offset: 12,
      });
    }
  }

  public renderPlaylistCard(playlist: IPlaylist): JSX.Element {
    return (
      <Grid item xs={12} md={3}>
        <PlaylistCard {...playlist} />
      </Grid>
    );
  }

  public render(): JSX.Element | null {
    if (this.props.playlists && this.props.playlists.items) {
      return (
        <div>
          <Grid container spacing={3}>
            {this.props.playlists.items.map((playlist: IPlaylist) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                  key={playlist.id}
                >
                  <PlaylistCard {...playlist} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      );
    }

    return null;
  }
}

export default Playlists;
