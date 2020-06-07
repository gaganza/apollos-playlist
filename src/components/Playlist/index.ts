import { MapStateToPropsParam, connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Playlist from "./Playlist";
import { IRootState } from "../../common/interfaces";
import { IStateProps, IPlaylistProps } from "./interfaces";

const mapStateToProps: MapStateToPropsParam<
  IStateProps,
  IPlaylistProps,
  IRootState
> = (state: IRootState): IStateProps => {
  return {
    spotifyWebApi: state.spotifyWebApi,
    user: state.user,
  };
};

export default withRouter(connect(mapStateToProps, null)(Playlist));
