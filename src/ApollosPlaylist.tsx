import { Dispatch } from "redux";
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
import SignOut from "./components/SignOut/SignOut";
import Dashboard from "./components/Dashboard/Dashboard";
import ResponsiveDrawer from "./components/ResponsiveDrawer/ResponsiveDrawer";

import { setGloablSpotifyClient } from "./common/actions";
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

class ApollosPlaylist extends React.PureComponent<TApollosPlaylistProps> {
  public componentDidMount() {
    this.props.setGlobalSpotifyClient(cookie.load("spotify-bearer"));
    this.forceUpdate();
  }

  public render(): JSX.Element {
    let isLoggedIn: boolean =
      this.props.spotifyWebApi.getAccessToken() !== undefined;

    if (!isLoggedIn) {
      return (
        <div className="apollos-playlist-container">
          <Switch>
            <SignIn />
          </Switch>
        </div>
      );
    }

    return (
      <div className="apollos-playlist-container">
        <ResponsiveDrawer>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/sign-out" component={SignOut} />
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
  };
};

const mapDispatchToProps: MapDispatchToPropsFunction<
  IDispatchProps,
  IApollosPlaylistProps
> = (dispatch: Dispatch<IAction<string>>): IDispatchProps => {
  return {
    setGlobalSpotifyClient: (token: string) =>
      dispatch(setGloablSpotifyClient(token)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ApollosPlaylist)
);
