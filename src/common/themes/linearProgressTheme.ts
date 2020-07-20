import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const linearProgresTheme = createMuiTheme({
  overrides: {
    MuiLinearProgress: {
      root: {
        height: 10,
        borderRadius: 5,
      },
      colorPrimary: {
        backgroundColor: 'grey',
      },
      barColorPrimary: {
        backgroundColor: '#1D1E28',
      },
      bar: {
        borderRadius: 5,
      },
    },
  },
});
