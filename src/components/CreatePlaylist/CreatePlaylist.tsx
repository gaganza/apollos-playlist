import * as React from 'react';
import { Typography, Grid, ThemeProvider } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';

import { capitalizeFirstLetter } from 'common/helpers';
import { TCreatePlaylistProps, ICreatePlaylistState } from './interfaces';

import { sliderTheme } from './themes';

class CreatePlaylist extends React.Component<TCreatePlaylistProps, ICreatePlaylistState> {
  public constructor(props: TCreatePlaylistProps) {
    super(props);

    this.state = {
      acousticness: {
        min: 33,
        max: 66,
      },
      danceability: {
        min: 33,
        max: 66,
      },
      energy: {
        min: 33,
        max: 66,
      },
      instrumentalness: {
        min: 33,
        max: 66,
      },
      valence: {
        min: 33,
        max: 66,
      },
    };
  }

  public handleSliderChange = (attr: keyof ICreatePlaylistState) => {
    return (_: React.ChangeEvent<{}>, newValue: number[]) => {
      this.setState({
        ...this.state,
        [attr]: { min: newValue[0], max: newValue[1] },
      });
    };
  };

  public renderAttributeSlider(attribute: keyof ICreatePlaylistState) {
    return (
      <>
        <Typography>{capitalizeFirstLetter(attribute as string)}</Typography>
        <ThemeProvider theme={sliderTheme}>
          <Slider
            valueLabelDisplay={'auto'}
            value={[this.state[attribute].min, this.state[attribute].max]}
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

  public render(): JSX.Element {
    let attributes: (keyof ICreatePlaylistState)[] = [
      'acousticness',
      'danceability',
      'energy',
      'instrumentalness',
      'valence',
    ];

    return (
      <Grid container spacing={3} alignItems={'center'}>
        <Grid item xs={12}>
          <Typography>Create a Playlist!</Typography>
        </Grid>

        {attributes.map(
          (attribute: keyof ICreatePlaylistState): JSX.Element => {
            return (
              <Grid item xs={12}>
                {this.renderAttributeSlider(attribute)}
              </Grid>
            );
          }
        )}
      </Grid>
    );
  }
}

export default CreatePlaylist;
