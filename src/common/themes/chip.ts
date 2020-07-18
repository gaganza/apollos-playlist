import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const chipTheme = createMuiTheme({
  overrides: {
    MuiChip: {
      root: {
        margin: '8px',
      },
    },
  },
});
