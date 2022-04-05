import { createTheme } from '@material-ui/core/styles';

export const tableTheme = createTheme({
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
