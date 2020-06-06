import { withRouter } from "react-router-dom";
import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToPropsParam,
} from "react-redux";
import SpotifyWebApi from "spotify-web-api-node";
import { ThunkDispatch } from "redux-thunk";

import App from "./App";
import { setGlobalSpotifyClient, fetchUserData } from "../../common/actions";
import { IAction, IRootState, ICurrentProfile } from "../../common/interfaces";
import { IAppProps, IDispatchProps, IStateProps } from "./interfaces";

const mapStateToProps: MapStateToPropsParam<
  IStateProps,
  IAppProps,
  IRootState
> = (state: IRootState): IStateProps => {
  return {
    spotifyWebApi: state.spotifyWebApi,
    user: state.user,
  };
};

const mapDispatchToProps: MapDispatchToPropsFunction<
  IDispatchProps,
  IAppProps
> = (
  dispatch: ThunkDispatch<IRootState, null, IAction<string | ICurrentProfile>>
): IDispatchProps => {
  return {
    setGlobalSpotifyClient: (token: string) =>
      dispatch(setGlobalSpotifyClient(token)),
    fetchUserData: (api: SpotifyWebApi) => dispatch(fetchUserData(api)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));