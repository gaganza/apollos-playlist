import {
  MapStateToPropsParam,
  connect,
  MapDispatchToPropsFunction,
} from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { withRouter } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";

import Playlists from "./Playlists";
import { fetchPlaylists } from "./actions";
import {
  IPaginationOptions,
  IAction,
  IPagingObject,
  IRootState,
} from "../../common/interfaces";
import { IStateProps, IPlaylistsProps, IDispatchProps } from "./interfaces";

const mapDispatchToProps: MapDispatchToPropsFunction<
  IDispatchProps,
  IPlaylistsProps
> = (
  dispatch: ThunkDispatch<IRootState, null, IAction<IPagingObject<SpotifyApi.PlaylistObjectSimplified>>>
): IDispatchProps => {
  return {
    fetchPlaylists: (
      api: SpotifyWebApi,
      userId: string,
      options: IPaginationOptions
    ) => dispatch(fetchPlaylists(api, userId, options)),
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
