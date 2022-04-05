import * as React from 'react';

import { redirectUri, clientId, scopes, authEndpoint, responseType } from 'authorization';
import { TSignInProps } from './interfaces';

import './style.scss';

class SignIn extends React.PureComponent<TSignInProps> {
  public componentDidMount = async (): Promise<void> => {
    let { history, spotifyWebApi, fetchUser } = this.props;
    let { location } = history;
    let { pathname } = location;

    // if the string 'access_token' exists in the URL then that means we were just redirected from the Spotfiy auth
    // endpoint and now have all of the info we need to safely use the Spotify API client
    if (pathname.indexOf('access_token') !== -1) {
      // due to the HashRouter all the links will look like /#/ - meaning in this case pathname will be prefixed with
      // a '/' which we have to strip out & replace with a '?' in order to easily use a URLSearchParam object for
      // parsing. Sadly, messing with the redirect uri did not help fix this issue.

      let treatedPathname: string = '?' + pathname.substring(1);

      spotifyWebApi.setAccessToken(new URLSearchParams(treatedPathname).get('access_token')!);

      await fetchUser(spotifyWebApi).then((_: void) => {
        history.push('/playlists');
      });
    }
  };

  public render = (): JSX.Element => {
    let params: URLSearchParams = new URLSearchParams({
      client_id: encodeURI(clientId),
      redirect_uri: encodeURI(redirectUri),
      scope: scopes.join(' '),
      response_type: encodeURI(responseType),
    });

    return (
      <a className="sign-in-button" href={authEndpoint + params.toString()}>
        Login to Spotify
      </a>
    );
  };
}

export default SignIn;
