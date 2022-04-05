import { createTheme } from '@material-ui/core/styles';

export const linearProgresTheme = createTheme({
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
