import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const sliderTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumbColorPrimary: {
        backgroundColor: '#1D1E28',
      },
      track: {
        backgroundColor: '#1D1E28',
      },
      rail: {
        backgroundColor: 'gray',
      },
      valueLabel: {
        color: '#1D1E28',
      },
    },
  },
});
