import * as React from "react";

import { TPlaylistProps, IPlaylistState } from "./interfaces";

class Playlist extends React.PureComponent<TPlaylistProps, IPlaylistState> {
  public render(): JSX.Element {
    return <div>Hello World</div>;
  }
}

export default Playlist;
