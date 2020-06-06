import * as React from "react";
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsFunction,
} from "react-redux";
import SpotifyLogin from "react-spotify-login";
import { withRouter } from "react-router-dom";
import camelize from "camelize";
import cookie from "react-cookies";

import { redirectUri, clientId, scopes } from "../../authorization";

import { setGloablSpotifyClient, fetchUserData } from "../../common/actions";
import { IRootState } from "../../redux/rootReducer";
import {
  IAuthorizationResponse,
  IAuthorizationErrorResponse,
  IAction,
  ICurrentProfile,
} from "../../common/interfaces";
import {
  TSignInProps,
  IStateProps,
  ISignInProps,
  IDispatchProps,
} from "./interfaces";
import SpotifyWebApi from "spotify-web-api-node";
import { ThunkDispatch } from "redux-thunk";

class SignIn extends React.PureComponent<TSignInProps> {
  public onSuccessHandler: (data: IAuthorizationResponse) => void = async (
    data: IAuthorizationResponse
  ) => {
    let { setGlobalSpotifyClient, history, fetchUserData } = this.props;

    cookie.save("spotify-bearer", camelize(data).accessToken, {
      path: "/",
    });

    setGlobalSpotifyClient(cookie.load("spotify-bearer"));

    await fetchUserData(this.props.spotifyWebApi).then((_: void) => {
      history.push("/playlists");
    });
  };

  public onErrorHandler: (data: IAuthorizationErrorResponse) => void = (
    data: IAuthorizationErrorResponse
  ) => {
    console.log(data.name, data.message);
  };

  public render(): JSX.Element {
    return (
      <div>
        <SpotifyLogin
          redirectUri={redirectUri}
          clientId={clientId}
          scope={scopes}
          onSuccess={this.onSuccessHandler}
          onFailure={this.onErrorHandler}
        />
      </div>
    );
  }
}

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
  dispatch: ThunkDispatch<IRootState, null, IAction<string | ICurrentProfile>>
): IDispatchProps => {
  return {
    setGlobalSpotifyClient: (token: string) =>
      dispatch(setGloablSpotifyClient(token)),
    fetchUserData: (api: SpotifyWebApi) => dispatch(fetchUserData(api)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
