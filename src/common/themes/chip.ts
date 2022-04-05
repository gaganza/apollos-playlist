import { createTheme } from '@material-ui/core/styles';

export const chipTheme = createTheme({
  overrides: {
    MuiChip: {
      root: {
        margin: '8px',
      },
    },
  },
});
