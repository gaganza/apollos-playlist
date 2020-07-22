import * as React from 'react';
import Cookies from 'js-cookie';

import { redirectUri, clientId, scopes, authEndpoint, responseType } from 'authorization';
import { TSignInProps } from './interfaces';

import './style.scss';

class SignIn extends React.PureComponent<TSignInProps> {
  public async componentDidMount(): Promise<void> {
    let { history } = this.props;
    let { location } = history;
    let { pathname } = location;

    console.log(process.env.PUBLIC_URL);

    if (pathname.indexOf('access_token') !== -1) {
      let token: string = pathname.substring(
        pathname.indexOf('access_token') + 'access_token'.length + 1,
        pathname.indexOf('&')
      );

      let { setGlobalSpotifyClient, history, fetchUser } = this.props;

      Cookies.set('spotify-bearer', token, {
        path: '/auth',
        sameSite: 'none',
        secure: true,
      });

      setGlobalSpotifyClient(token);
      await fetchUser(this.props.spotifyWebApi).then((_: void) => {
        history.push('/playlists');
      });
    }
  }

  public render(): JSX.Element {
    let uri: string = `${authEndpoint}`;

    let params: URLSearchParams = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      scopes: scopes.join('%20'),
      response_type: responseType,
    });

    return (
      <a className="sign-in-button" href={uri + params.toString()}>
        Login to Spotify
      </a>
    );
  }
}

export default SignIn;
