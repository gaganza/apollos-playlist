import * as React from "react";
import { Dispatch } from "redux";
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsFunction,
} from "react-redux";
import SpotifyLogin from "react-spotify-login";
import { withRouter } from "react-router-dom";
import camelize from "camelize";
import cookie from "react-cookies";

import { redirectUri, clientId } from "../../authorization";

import { setGloablSpotifyClient } from "../../common/actions";
import { IRootState } from "../../redux/rootReducer";
import {
  IAuthorizationResponse,
  IAuthorizationErrorResponse,
  IAction,
} from "../../common/interfaces";
import {
  TSignInProps,
  IStateProps,
  ISignInProps,
  IDispatchProps,
} from "./interfaces";

class SignIn extends React.PureComponent<TSignInProps> {
  public onSuccessHandler: (data: IAuthorizationResponse) => void = (
    data: IAuthorizationResponse
  ) => {
    let { setGlobalSpotifyClient, history } = this.props;

    cookie.save("spotify-bearer", camelize(data).accessToken, {
      path: "/",
    });

    setGlobalSpotifyClient(cookie.load("spotify-bearer"));
    history.push("/dashboard");
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
> = (dispatch: Dispatch<IAction<string>>): IDispatchProps => {
  return {
    setGlobalSpotifyClient: (token: string) =>
      dispatch(setGloablSpotifyClient(token)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
