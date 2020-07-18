import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const inputTheme = createMuiTheme({
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
  },
});
