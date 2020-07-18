import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const buttonTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      containedPrimary: {
        backgroundColor: '#1D1E28',
        '&:hover': {
          backgroundColor: 'grey',
        },
      },
    },
  },
});
