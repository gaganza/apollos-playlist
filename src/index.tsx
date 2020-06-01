import React from "react";
import { Store } from "redux";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import ApollosPlaylist from "./ApollosPlaylist";
import configureStore from "./redux/store";

document.addEventListener("DOMContentLoaded", () => {
  const root: HTMLElement = document.getElementById("root") as HTMLElement;
  const store: Store = configureStore();

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ApollosPlaylist />
      </BrowserRouter>
    </Provider>,
    root
  );
});
