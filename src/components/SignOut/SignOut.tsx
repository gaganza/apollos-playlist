import * as React from 'react';
import cookie from 'react-cookies';

import { TSignOutProps } from './interfaces';
class SignOut extends React.PureComponent<TSignOutProps> {
  public onClickHandler = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let { setGlobalSpotifyClient, history } = this.props;
    cookie.remove('spotify-bearer', { path: '/' });

    setGlobalSpotifyClient(cookie.load('spotify-bearer'));
    history.push('/');
  };

  public render(): JSX.Element {
    return (
      <div>
        <button onClick={this.onClickHandler}>Sign out</button>
      </div>
    );
  }
}

export default SignOut;
