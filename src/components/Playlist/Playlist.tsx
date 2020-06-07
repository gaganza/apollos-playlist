import * as React from "react";
import camelize from "camelize";
import { Grid, Typography } from "@material-ui/core";

import { Response, IPlaylist } from "../../common/interfaces";
import { TPlaylistProps, IPlaylistState } from "./interfaces";

class Playlist extends React.Component<TPlaylistProps, IPlaylistState> {
  public constructor(props: TPlaylistProps) {
    super(props);

    this.state = {
      playlist: null,
      trackAudioFeatures: [],
    };
  }

  public async componentDidMount(): Promise<void> {
    let { location, spotifyWebApi } = this.props;

    let playlistId: string = location.pathname.substring(
      location.pathname.lastIndexOf("/") + 1
    );

    await spotifyWebApi
      .getPlaylist(playlistId)
      .then((response: Response<SpotifyApi.SinglePlaylistResponse>) => {
        let playlist: IPlaylist = camelize(response.body);
        this.setState({ playlist });

        let trackIds: string[] = playlist.tracks.items.map(
          (item) => item.track.id
        );

        spotifyWebApi.getAudioFeaturesForTracks(trackIds).then((response) => {
          this.setState({
            trackAudioFeatures: camelize(response.body).audioFeatures,
          });
        });
      });
  }

  public render(): JSX.Element {
    let { playlist } = this.state;

    if (playlist == null) {
      return <div>loading ...</div>;
    }

    return (
      <Grid container>
        <Grid item>
          <Typography>{playlist.name}</Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Playlist;
