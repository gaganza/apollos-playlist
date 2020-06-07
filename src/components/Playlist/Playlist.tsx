import * as React from "react";
import camelize from "camelize";
import {
  Grid,
  Typography,
  Card,
  createMuiTheme,
  ThemeProvider,
  CardActionArea,
  CardMedia,
  CardContent,
  LinearProgress,
} from "@material-ui/core";

import * as helpers from "./helpers";
import { Response, IPlaylist, IAudioFeatures } from "../../common/interfaces";
import { TPlaylistProps, IPlaylistState } from "./interfaces";

const cardTheme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        padding: "8px",
      },
    },
  },
});

const linearProgresTheme = createMuiTheme({
  overrides: {
    MuiLinearProgress: {
      root: {
        height: 10,
        borderRadius: 5,
      },
      colorPrimary: {
        backgroundColor: "#d3d3d3",
      },
      barColorPrimary: {
        backgroundColor: "#1D1E28",
      },
      bar: {
        borderRadius: 5,
      },
    },
  },
});

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

  public renderArtworkAndTitleCard(playlist: IPlaylist): JSX.Element {
    return (
      <div>
        <CardContent>
          <Typography>{playlist.name}</Typography>
        </CardContent>
        {playlist.images[0] && (
          <CardMedia
            style={{ padding: "16px" }}
            component="img"
            alt={`${playlist.name} playlist artwork`}
            image={playlist.images[0].url}
            title={playlist.name}
          />
        )}
      </div>
    );
  }

  public renderMetricsCard(
    playlist: IPlaylist,
    trackAudioFeatures: IAudioFeatures[]
  ) {
    let averages: Partial<IAudioFeatures> = helpers.averageAndNormalizeAudioFeatures(
      playlist,
      trackAudioFeatures
    );

    return (
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ padding: "24px" }}>
          <Typography>Accousticness</Typography>
          <ThemeProvider theme={linearProgresTheme}>
            <LinearProgress
              variant="determinate"
              value={averages.acousticness}
            />
          </ThemeProvider>
        </Grid>

        <Grid item xs={12} style={{ padding: "24px" }}>
          <Typography>Danceability</Typography>
          <ThemeProvider theme={linearProgresTheme}>
            <LinearProgress
              variant="determinate"
              value={averages.danceability}
            />
          </ThemeProvider>
        </Grid>

        <Grid item xs={12} style={{ padding: "24px" }}>
          <Typography>Energy</Typography>
          <ThemeProvider theme={linearProgresTheme}>
            <LinearProgress variant="determinate" value={averages.energy} />
          </ThemeProvider>
        </Grid>

        <Grid item xs={12} style={{ padding: "24px" }}>
          <Typography>Instrumentalness</Typography>
          <ThemeProvider theme={linearProgresTheme}>
            <LinearProgress
              variant="determinate"
              value={averages.instrumentalness}
            />
          </ThemeProvider>
        </Grid>

        <Grid item xs={12} style={{ padding: "24px" }}>
          <Typography>Valence</Typography>
          <ThemeProvider theme={linearProgresTheme}>
            <LinearProgress variant="determinate" value={averages.valence} />
          </ThemeProvider>
        </Grid>
      </Grid>
    );
  }

  public render(): JSX.Element {
    let { playlist, trackAudioFeatures } = this.state;

    if (playlist == null) {
      return <div>loading ...</div>;
    }

    return (
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ height: "100%" }}>
          <ThemeProvider theme={cardTheme}>
            <Card>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                }}
              >
                {this.renderArtworkAndTitleCard(playlist)}
                {this.renderMetricsCard(playlist, trackAudioFeatures)}
              </div>
            </Card>
          </ThemeProvider>
        </Grid>
      </Grid>
    );
  }
}

export default Playlist;
