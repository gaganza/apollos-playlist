import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import cookie from 'react-cookies';
import { Snackbar } from '@material-ui/core';

import HomePage from 'components/HomePage';
import NotFound from 'components/NotFound';
import SignIn from 'components/SignIn';
import Playlist from 'components/Playlist';
import Playlists from 'components/Playlists';
import CreatePlaylist from 'components/CreatePlaylist';
import ResponsiveDrawer from 'components/ResponsiveDrawer/ResponsiveDrawer';

import { TAppProps } from './interfaces';

import './styles.scss';

class App extends React.PureComponent<TAppProps> {
  public async componentDidMount() {
    let { setGlobalSpotifyClient, fetchUser, history } = this.props;

    setGlobalSpotifyClient(cookie.load('spotify-bearer'));

    let { spotifyWebApi } = this.props;

    if (spotifyWebApi.getAccessToken() !== undefined) {
      await fetchUser(spotifyWebApi).then((_: void) => {
        if (history.location.pathname === '/') {
          history.push('/playlists');
        }
      });
    }
  }

  public render(): JSX.Element {
    let { closeSnackbar, snackbar } = this.props;
    let isLoggedIn: boolean = this.props.spotifyWebApi.getAccessToken() !== undefined;

    if (!isLoggedIn) {
      return (
        <div className="apollos-playlist-container">
          <Snackbar {...snackbar} onClose={closeSnackbar} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <SignIn />
          </Switch>
        </div>
      );
    }

    return (
      <div className="apollos-playlist-container">
        <ResponsiveDrawer>
          <Snackbar {...snackbar} onClose={closeSnackbar} />
          <Switch>
            <Route path="/playlists/:playlistId" component={Playlist} />
            <Route exact path="/playlists" component={Playlists} />
            <Route exact path="/create-playlist" component={CreatePlaylist} />
            <Route path="*" component={NotFound} />
          </Switch>
        </ResponsiveDrawer>
      </div>
    );
  }
}

export default App;
