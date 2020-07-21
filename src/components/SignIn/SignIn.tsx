import * as React from 'react';
import SpotifyLogin from 'react-spotify-login';
import camelize from 'camelize';
import Cookies from 'universal-cookie';

import { redirectUri, clientId, scopes } from 'authorization';

import { IAuthorizationResponse, IAuthorizationErrorResponse } from 'common/interfaces';
import { TSignInProps } from './interfaces';

import './style.scss';

class SignIn extends React.PureComponent<TSignInProps> {
  public onSuccessHandler: (data: IAuthorizationResponse) => void = async (data: IAuthorizationResponse) => {
    let { setGlobalSpotifyClient, history, fetchUser } = this.props;
    const cookie = new Cookies();
    cookie.set('spotify-bearer', camelize(data).accessToken, {
      path: '/',
    });

    setGlobalSpotifyClient(cookie.get('spotify-bearer'));
    await fetchUser(this.props.spotifyWebApi).then((_: void) => {
      history.push('/playlists');
    });
  };

  public onErrorHandler: (data: IAuthorizationErrorResponse) => void = (data: IAuthorizationErrorResponse) => {
    console.log(data.name, data.message);
  };

  public render(): JSX.Element {
    return (
      <div className={'sign-in-button-container'}>
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
