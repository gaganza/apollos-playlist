import * as React from 'react';

import { TCreatePlaylistProps, ICreatePlaylistState } from './interfaces';

class CreatePlaylist extends React.Component<TCreatePlaylistProps, ICreatePlaylistState> {
  public constructor(props: TCreatePlaylistProps) {
    super(props);
  }

  public render(): JSX.Element {
    return <div>Hello World</div>;
  }
}

export default CreatePlaylist;
