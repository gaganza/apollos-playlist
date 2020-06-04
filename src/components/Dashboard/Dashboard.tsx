import * as React from "react";
import { MapStateToPropsParam, connect } from "react-redux";

import {
  THomePageProps,
  IStateProps,
  IHomePageProps,
  IHomePageState,
} from "./interfaces";

import "./styles.scss";
import { IRootState } from "../../redux/rootReducer";
import { withRouter } from "react-router-dom";

class Dashboard extends React.PureComponent<THomePageProps, IHomePageState> {
  public render(): JSX.Element {
    return <div>{this.props.user && this.props.user.displayName}</div>;
  }
}

const mapStateToProps: MapStateToPropsParam<
  IStateProps,
  IHomePageProps,
  IRootState
> = (state: IRootState): IStateProps => {
  return {
    spotifyWebApi: state.spotifyWebApi,
    user: state.user,
  };
};

export default withRouter(connect(mapStateToProps, null)(Dashboard));
