import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Snackbar } from '@material-ui/core';

import HomePage from 'components/HomePage';
import NotFound from 'components/NotFound';
import Playlist from 'components/Playlist';
import Playlists from 'components/Playlists';
import CreatePlaylist from 'components/CreatePlaylist';
import ResponsiveDrawer from 'components/ResponsiveDrawer/ResponsiveDrawer';

import { TAppProps } from './interfaces';

import './styles.scss';

class App extends React.PureComponent<TAppProps> {
  public async componentDidMount() {
    let { setGlobalSpotifyClient, fetchUser, history } = this.props;
    if (Cookies.get('spotify-bearer')) {
      setGlobalSpotifyClient(Cookies.get('spotify-bearer')!);
    }

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
    let { closeSnackbar, snackbar, spotifyWebApi } = this.props;
    let isLoggedIn: boolean = spotifyWebApi.getAccessToken() !== undefined && spotifyWebApi.getAccessToken() !== '';

    if (!isLoggedIn) {
      return (
        <div className="apollos-playlist-container">
          <HomePage />
        </div>
      );
    }

    return (
      <div className="apollos-playlist-container">
        <ResponsiveDrawer>
          <Snackbar {...snackbar} onClose={closeSnackbar} />
          <Switch>
            <Route exact path={['/', '/playlists']} component={Playlists} />
            <Route path={'/playlists/:playlistId'} component={Playlist} />
            <Route exact path={'/create-playlist'} component={CreatePlaylist} />
            <Route path="*" component={NotFound} />
          </Switch>
        </ResponsiveDrawer>
      </div>
    );
  }
}

export default App;
