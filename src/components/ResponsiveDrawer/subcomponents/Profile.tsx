import * as React from "react";
import { MapStateToPropsParam, connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { IRootState } from "../../../redux/rootReducer";
import { TProfileProps, IStateProps, IProfileProps } from "./interfaces";
import { Divider, Avatar } from "@material-ui/core";

class Profile extends React.PureComponent<TProfileProps> {
  public render(): JSX.Element | null {
    let { user } = this.props;

    if (user == null) {
      return null;
    }

    return (
      <div>
        <Divider />
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt={user.displayName}
            src={user.images && user.images[0] && user.images[0].url}
            style={{
              width: "100px",
              height: "100px",
            }}
          />
          <h1
            style={{
              color: "white",
              padding: "8px 16px",
              wordWrap: "break-word",
            }}
          >
            {user.displayName}
          </h1>
          <Divider />
        </div>
      </div>
    );
  }
}

const mapStateToProps: MapStateToPropsParam<
  IStateProps,
  IProfileProps,
  IRootState
> = (state: IRootState): IStateProps => {
  return {
    user: state.user,
  };
};

export default withRouter(connect(mapStateToProps, null)(Profile));
