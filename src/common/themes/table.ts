import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const tableTheme = createMuiTheme({
  overrides: {
    MuiTableCell: {
      root: {
        paddingLeft: '0px',
        paddingRight: '8px',
        paddingTop: '4px',
        paddingBottom: '4px',
      },
    },
  },
});
