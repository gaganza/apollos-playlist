import * as React from "react";
import { MapStateToPropsParam, connect } from "react-redux";

import {
  TPlaylistProps,
  IStateProps,
  IPlaylistProps,
  IPlaylistState,
} from "./interfaces";

import { IRootState } from "../../redux/rootReducer";
import { withRouter } from "react-router-dom";

class Playlist extends React.PureComponent<TPlaylistProps, IPlaylistState> {
  public render(): JSX.Element {
    return <div>Hello World</div>;
  }
}

const mapStateToProps: MapStateToPropsParam<
  IStateProps,
  IPlaylistProps,
  IRootState
> = (state: IRootState): IStateProps => {
  return {
    spotifyWebApi: state.spotifyWebApi,
    user: state.user,
    playlists: state.playlists,
  };
};

export default withRouter(connect(mapStateToProps, null)(Playlist));
