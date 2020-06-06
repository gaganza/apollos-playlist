import * as React from "react";
import SpotifyLogin from "react-spotify-login";
import camelize from "camelize";
import cookie from "react-cookies";

import { redirectUri, clientId, scopes } from "../../authorization";

import {
  IAuthorizationResponse,
  IAuthorizationErrorResponse,
} from "../../common/interfaces";
import { TSignInProps } from "./interfaces";

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

export default SignIn;
