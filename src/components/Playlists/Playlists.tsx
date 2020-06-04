import * as React from "react";
import { MapStateToPropsParam, connect } from "react-redux";

import {
  TPlaylistsProps,
  IStateProps,
  IPlaylistsProps,
  IPlaylistsState,
} from "./interfaces";

import "./styles.scss";
import { IRootState } from "../../redux/rootReducer";
import { withRouter } from "react-router-dom";

class Playlists extends React.PureComponent<TPlaylistsProps, IPlaylistsState> {
  public render(): JSX.Element {
    return <div>{this.props.user && this.props.user.displayName}</div>;
  }
}

const mapStateToProps: MapStateToPropsParam<
  IStateProps,
  IPlaylistsProps,
  IRootState
> = (state: IRootState): IStateProps => {
  return {
    spotifyWebApi: state.spotifyWebApi,
    user: state.user,
  };
};

export default withRouter(connect(mapStateToProps, null)(Playlists));
