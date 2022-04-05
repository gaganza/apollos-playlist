import { createTheme } from '@material-ui/core/styles';

export const inputTheme = createTheme({
  palette: {
    primary: {
      main: '#1D1E28',
      dark: '#1D1E28',
    },
  },
  overrides: {
    MuiInput: {
      root: {
        width: '100%',
      },
    },

    MuiFormControl: {
      root: {
        width: '100%',
      },
    },
  },
});
