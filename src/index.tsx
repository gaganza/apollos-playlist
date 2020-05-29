import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import ApollosPlaylist from "./App";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <BrowserRouter>
      <ApollosPlaylist />
    </BrowserRouter>,
    document.getElementById("root") as HTMLElement
  );
});
