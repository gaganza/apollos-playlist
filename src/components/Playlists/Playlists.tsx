import * as React from "react";
import {
  MapStateToPropsParam,
  connect,
  MapDispatchToPropsFunction,
} from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import {
  TPlaylistsProps,
  IStateProps,
  IPlaylistsProps,
  IPlaylistsState,
  IDispatchProps,
} from "./interfaces";

import "./styles.scss";
import { IRootState } from "../../redux/rootReducer";
import { withRouter } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";
import {
  IPaginationOptions,
  IAction,
  IPagingObject,
  IPlaylist,
} from "../../common/interfaces";
import { fetchPlaylistData } from "./actions";

import { PlaylistCard } from "./subcomponents";
import { Grid } from "@material-ui/core";

class Playlists extends React.PureComponent<TPlaylistsProps, IPlaylistsState> {
  public async componentDidMount(): Promise<void> {
    // no URL params
    if (this.props.location.search === "") {
      await this.props.fetchPlaylistData(
        this.props.spotifyWebApi,
        this.props.user.id,
        { limit: 12, offset: 12 }
      );
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
const mapDispatchToProps: MapDispatchToPropsFunction<
  IDispatchProps,
  IPlaylistsProps
> = (
  dispatch: ThunkDispatch<IRootState, null, IAction<IPagingObject<IPlaylist>>>
): IDispatchProps => {
  return {
    fetchPlaylistData: (
      api: SpotifyWebApi,
      userId: string,
      options?: IPaginationOptions
    ) => dispatch(fetchPlaylistData(api, userId, options)),
  };
};

const mapStateToProps: MapStateToPropsParam<
  IStateProps,
  IPlaylistsProps,
  IRootState
> = (state: IRootState): IStateProps => {
  return {
    spotifyWebApi: state.spotifyWebApi,
    user: state.user,
    playlists: state.playlists,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Playlists)
);
