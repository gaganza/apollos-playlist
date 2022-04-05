import { createTheme } from '@material-ui/core/styles';

export const buttonTheme = createTheme({
  overrides: {
    MuiButton: {
      containedPrimary: {
        textTransform: 'none',
        backgroundColor: '#1D1E28',
        '&:hover': {
          backgroundColor: 'grey',
        },
      },
    },
  },
});
