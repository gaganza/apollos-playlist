import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Snackbar } from '@material-ui/core';

import HomePage from 'components/HomePage';
import NotFound from 'components/NotFound';
import Playlist from 'components/Playlist';
import Playlists from 'components/Playlists';
import CreatePlaylist from 'components/CreatePlaylist';
import ResponsiveDrawer from 'components/ResponsiveDrawer/ResponsiveDrawer';
import { TAppProps } from './index';

import './styles.scss';

class App extends React.PureComponent<TAppProps> {
  public componentDidMount = (): void => {
    let { history, spotifyWebApi, openSnackbar } = this.props;
    let { location } = history;
    let { pathname } = location;

    let treatedPathname: string = '?' + pathname.substring(1);
    let params: URLSearchParams = new URLSearchParams(treatedPathname);

    if (!!params.get('expires_in')) {
      let expiresIn: Date = new Date();
      expiresIn.setSeconds(expiresIn.getSeconds() + Number(params.get('expires_in')!));

      setInterval(() => {
        if (new Date() >= expiresIn) {
          clearInterval();
          spotifyWebApi.resetAccessToken();
          openSnackbar({
            open: true,
            message: 'Oops! Looks like your session has expired',
            autoHideDuration: null,
            anchorOrigin: { horizontal: 'center', vertical: 'top' },
          });
        }
      }, 1000);
    }
  };

  public render = (): JSX.Element => {
    let { closeSnackbar, snackbar, spotifyWebApi } = this.props;
    let isLoggedIn: boolean = !!spotifyWebApi.getAccessToken();

    if (!isLoggedIn) {
      return (
        <div className="apollos-playlist-container">
          <Snackbar {...snackbar} onClose={closeSnackbar} />
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
  };
}

export default App;
