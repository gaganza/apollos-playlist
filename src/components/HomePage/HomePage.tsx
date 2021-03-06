import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SignIn from 'components/SignIn';

import './styles.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: '#1D1E28',
  },
  image: {
    backgroundImage:
      'url(https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#1D1E28',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1D1E28',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#1D1E28',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={'apollos-playlist__home-page'}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" style={{ color: 'white ' }}>
            Apollo's Playlist
          </Typography>
          <SignIn />
        </div>
      </Grid>
    </Grid>
  );
}
