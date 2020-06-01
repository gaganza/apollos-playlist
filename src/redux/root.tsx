import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Store } from "redux";

import ApollosPlaylist from "../ApollosPlaylist";
import { IRootState } from "./rootReducer";

interface IRootProps {
  store: Store<IRootState>;
}

const Root = ({ store }: IRootProps): JSX.Element => (
  <Provider store={store}>
    <BrowserRouter>
      <ApollosPlaylist />
    </BrowserRouter>
  </Provider>
);

export default Root;
