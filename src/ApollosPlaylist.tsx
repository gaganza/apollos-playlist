import * as React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToPropsParam,
} from "react-redux";
import cookie from "react-cookies";

import HomePage from "./components/HomePage/HomePage";
import NotFound from "./components/NotFound/NotFound";
import SignIn from "./components/SignIn/SignIn";
import Playlists from "./components/Playlists/Playlists";
import ResponsiveDrawer from "./components/ResponsiveDrawer/ResponsiveDrawer";

import { setGloablSpotifyClient, fetchUserData } from "./common/actions";
import { IRootState } from "./redux/rootReducer";
import { IAction } from "./common/interfaces";
import {
  TApollosPlaylistProps,
  IApollosPlaylistProps,
  IDispatchProps,
  IStateProps,
} from "./interfaces";

import "typeface-roboto";
import "./styles.scss";
import SpotifyWebApi from "spotify-web-api-node";
import { ThunkDispatch } from "redux-thunk";
import { ICurrentProfile } from "./common/interfaces";
import Playlist from "./components/Playlist/Playlist";

class ApollosPlaylist extends React.PureComponent<TApollosPlaylistProps> {
  public async componentDidMount() {
    this.props.setGlobalSpotifyClient(cookie.load("spotify-bearer"));

    if (this.props.spotifyWebApi.getAccessToken() !== undefined) {
      await this.props
        .fetchUserData(this.props.spotifyWebApi)
        .then((_: void) => {
          if (this.props.history.location.pathname === "/") {
            this.props.history.push("/playlists");
          }
        });
    }
  }

  public render(): JSX.Element {
    let isLoggedIn: boolean =
      this.props.spotifyWebApi.getAccessToken() !== undefined;

    if (!isLoggedIn) {
      return (
        <div className="apollos-playlist-container">
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
          <Switch>
            <Route path="/playlists/:playlistId" component={Playlist} />
            <Route exact path="/playlists" component={Playlists} />
            <Route path="*" component={NotFound} />
          </Switch>
        </ResponsiveDrawer>
      </div>
    );
  }
}

const mapStateToProps: MapStateToPropsParam<
  IStateProps,
  IApollosPlaylistProps,
  IRootState
> = (state: IRootState): IStateProps => {
  return {
    spotifyWebApi: state.spotifyWebApi,
    user: state.user,
  };
};

const mapDispatchToProps: MapDispatchToPropsFunction<
  IDispatchProps,
  IApollosPlaylistProps
> = (
  dispatch: ThunkDispatch<IRootState, null, IAction<string | ICurrentProfile>>
): IDispatchProps => {
  return {
    setGlobalSpotifyClient: (token: string) =>
      dispatch(setGloablSpotifyClient(token)),
    fetchUserData: (api: SpotifyWebApi) => dispatch(fetchUserData(api)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ApollosPlaylist)
);
