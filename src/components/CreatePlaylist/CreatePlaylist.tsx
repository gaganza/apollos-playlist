import * as React from 'react';
import {
  Typography,
  Grid,
  ThemeProvider,
  Button,
  Select,
  Chip,
  Slider,
  Input,
  MenuItem,
  Avatar,
} from '@material-ui/core';

import { capitalizeFirstLetter } from 'common/helpers';
import { Response, IAudioFeatures } from 'common/interfaces';
import { TCreatePlaylistProps, ICreatePlaylistState } from './interfaces';

import { buttonTheme, sliderTheme, inputTheme } from 'common/themes';

class CreatePlaylist extends React.Component<TCreatePlaylistProps, ICreatePlaylistState> {
  public constructor(props: TCreatePlaylistProps) {
    super(props);

    this.state = {
      query: {
        acousticness: {
          min: 0.33,
          max: 0.66,
        },
        danceability: {
          min: 0.33,
          max: 0.66,
        },
        energy: {
          min: 0.33,
          max: 0.66,
        },
        instrumentalness: {
          min: 0.33,
          max: 0.66,
        },
        valence: {
          min: 0.33,
          max: 0.66,
        },
      },
      results: null,
      selectedArtistsIds: [],
    };
  }

  public componentDidMount(): void {
    let { fetchTopArtists, spotifyWebApi } = this.props;

    fetchTopArtists(spotifyWebApi, 'short_term');
    fetchTopArtists(spotifyWebApi, 'medium_term');
    fetchTopArtists(spotifyWebApi, 'long_term');
  }

  public valueLabelFormat = (value: number, _: number): string => {
    return Math.round(value * 100).toString();
  };

  public handleSliderChange = (attr: keyof IAudioFeatures) => {
    return (_: React.ChangeEvent<{}>, newValue: number[]) => {
      let state: ICreatePlaylistState = this.state;
      state.query[attr] = { min: newValue[0], max: newValue[1] };

      this.setState(state);
    };
  };

  public handleCreatePlaylistClick = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let {
      query: { acousticness, danceability, energy, instrumentalness, valence },
    } = this.state;
    this.props.spotifyWebApi
      .getRecommendations({
        min_acousticness: acousticness.min,
        max_acousticness: acousticness.max,
        min_danceability: danceability.min,
        max_danceability: danceability.max,
        min_energy: energy.min,
        max_energy: energy.max,
        min_instrumentalness: instrumentalness.min,
        max_instrumentalness: instrumentalness.max,
        min_valence: valence.min,
        max_valence: valence.max,
        seed_artists: this.state.selectedArtistsIds,
        limit: 50,
      })
      .then((response: Response<SpotifyApi.RecommendationsFromSeedsResponse>) => {
        this.setState({ results: response.body });
        debugger;
      });
  };

  public renderAttributeSlider(attribute: keyof IAudioFeatures) {
    return (
      <>
        <Typography>{capitalizeFirstLetter(attribute as string)}</Typography>
        <ThemeProvider theme={sliderTheme}>
          <Slider
            valueLabelDisplay={'auto'}
            valueLabelFormat={this.valueLabelFormat}
            min={0}
            max={1}
            step={0.01}
            value={[this.state.query[attribute].min, this.state.query[attribute].max]}
            onChange={
              (this.handleSliderChange(attribute) as unknown) as (
                event: React.ChangeEvent<{}>,
                value: number | number[]
              ) => void
            }
          />
        </ThemeProvider>
      </>
    );
  }

  public handleArtistSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    this.setState({
      selectedArtistsIds: (event.target.value as unknown) as string[],
    });
  };

  public renderArtistSelect = (artists: SpotifyApi.ArtistObjectFull[]): JSX.Element => {
    let { selectedArtistsIds } = this.state;

    return (
      <>
        <Typography>Seed artists</Typography>
        <ThemeProvider theme={inputTheme}>
          <Select
            multiple
            value={selectedArtistsIds}
            onChange={this.handleArtistSelect}
            input={<Input />}
            renderValue={(selected) => (
              <div>
                {(selected as string[]).map((value) => (
                  <Chip
                    key={value}
                    label={artists.find((a) => a.id === value)?.name}
                    avatar={<Avatar src={artists.find((a) => a.id === value)?.images[0].url} />}
                  />
                ))}
              </div>
            )}
          >
            {artists.map(
              (artist: SpotifyApi.ArtistObjectFull): JSX.Element => (
                <MenuItem key={artist.name} value={artist.id}>
                  {artist.name}
                </MenuItem>
              )
            )}
          </Select>
        </ThemeProvider>
      </>
    );
  };

  public render(): JSX.Element {
    let { selectedArtistsIds } = this.state;

    let attributes: (keyof IAudioFeatures)[] = [
      'acousticness',
      'danceability',
      'energy',
      'instrumentalness',
      'valence',
    ];

    let artists: SpotifyApi.ArtistObjectFull[] = [];

    let { topArtists } = this.props;

    if (topArtists && topArtists.longTerm && topArtists.mediumTerm && topArtists.shortTerm) {
      let { longTerm, mediumTerm, shortTerm } = topArtists;

      artists = artists.concat(longTerm.items.concat(mediumTerm.items.concat(shortTerm.items)));

      artists = artists.filter((e, i) => artists.findIndex((a) => a.id === e.id) === i);
    }

    return (
      <Grid container spacing={3} alignItems={'center'}>
        <Grid item xs={12}>
          <Typography variant={'h6'}>Create a Playlist!</Typography>
        </Grid>

        <Grid item xs={12}>
          {this.renderArtistSelect(artists)}
        </Grid>

        {attributes.map(
          (attribute: keyof IAudioFeatures): JSX.Element => {
            return (
              <Grid item xs={12} key={`slider-${attribute}`}>
                {this.renderAttributeSlider(attribute)}
              </Grid>
            );
          }
        )}

        <Grid container direction={'row'} justify={'center'}>
          <Grid item>
            <ThemeProvider theme={buttonTheme}>
              <Button
                variant={'contained'}
                color={'primary'}
                size={'medium'}
                onClick={this.handleCreatePlaylistClick}
                disabled={selectedArtistsIds.length === 0}
              >
                Create
              </Button>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default CreatePlaylist;
