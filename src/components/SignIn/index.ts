import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsFunction,
} from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { withRouter } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";

import SignIn from "./SignIn";
import { setGlobalSpotifyClient, fetchUserData } from "../../common/actions";
import { IAction, IRootState } from "../../common/interfaces";
import { IStateProps, ISignInProps, IDispatchProps } from "./interfaces";

const mapStateToProps: MapStateToPropsParam<
  IStateProps,
  ISignInProps,
  IRootState
> = (state: IRootState): IStateProps => {
  return {
    spotifyWebApi: state.spotifyWebApi,
  };
};

const mapDispatchToProps: MapDispatchToPropsFunction<
  IDispatchProps,
  ISignInProps
> = (
  dispatch: ThunkDispatch<IRootState, null, IAction<string> | IAction<SpotifyApi.CurrentUsersProfileResponse>>
): IDispatchProps => {
  return {
    setGlobalSpotifyClient: (token: string) =>
      dispatch(setGlobalSpotifyClient(token)),
    fetchUserData: (api: SpotifyWebApi) => dispatch(fetchUserData(api)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
