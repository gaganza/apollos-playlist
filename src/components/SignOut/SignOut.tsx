import * as React from "react";
import { Dispatch } from "redux";
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsFunction,
} from "react-redux";
import { withRouter } from "react-router-dom";
import cookie from "react-cookies";

import { setGloablSpotifyClient } from "../../common/actions";
import { IRootState } from "../../redux/rootReducer";
import { IAction } from "../../common/interfaces";
import {
  TSignOutProps,
  IStateProps,
  ISignOutProps,
  IDispatchProps,
} from "./interfaces";
class SignOut extends React.PureComponent<TSignOutProps> {
  public onClickHandler: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let { setGlobalSpotifyClient, history } = this.props;
    cookie.remove("spotify-bearer", { path: "/" });

    setGlobalSpotifyClient(cookie.load("spotify-bearer"));
    history.push("/");
  };

  public render(): JSX.Element {
    return (
      <div>
        <button onClick={this.onClickHandler}>Sign out</button>
      </div>
    );
  }
}

const mapStateToProps: MapStateToPropsParam<
  IStateProps,
  ISignOutProps,
  IRootState
> = (state: IRootState): IStateProps => {
  return {
    spotifyWebApi: state.spotifyWebApi,
  };
};

const mapDispatchToProps: MapDispatchToPropsFunction<
  IDispatchProps,
  ISignOutProps
> = (dispatch: Dispatch<IAction<string>>): IDispatchProps => {
  return {
    setGlobalSpotifyClient: (token: string) =>
      dispatch(setGloablSpotifyClient(token)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignOut)
);
