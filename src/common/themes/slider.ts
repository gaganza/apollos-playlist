import { createTheme } from '@material-ui/core/styles';

export const sliderTheme = createTheme({
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
