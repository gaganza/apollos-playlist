import * as React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import NotFound from "./components/NotFound/NotFound";
import SignIn from "./components/SignIn/SignIn";
import SignOut from "./components/SignOut/SignOut";

export default class ApollsPlaylist extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-out" component={SignOut} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}
