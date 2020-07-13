import * as React from "react";
import { Link } from "react-router-dom";
import {
  CardMedia,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";

const cardTheme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        boxShadow: "none",
        "&:hover": {
          boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        },
      },
    },
  },
});

class PlaylistCard extends React.PureComponent<SpotifyApi.PlaylistObjectSimplified> {
  public render(): JSX.Element {
    let { name, images, id } = this.props;

    return (
      <Link to={`/playlists/${id}`} style={{ textDecoration: "none" }}>
        <ThemeProvider theme={cardTheme}>
          <Card>
            <CardActionArea>
              {images[0] && (
                <CardMedia
                  style={{ padding: "16px" }}
                  component="img"
                  alt={`${name} playlist artwork`}
                  image={images[0].url}
                  title={name}
                />
              )}
              <CardContent>
                <Typography>{name}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </ThemeProvider>
      </Link>
    );
  }
}

export { PlaylistCard };
