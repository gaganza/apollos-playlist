import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import MusicNote from '@material-ui/icons/MusicNote';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

import Profile from './subcomponents/Profile';
import SignOut from './subcomponents/SignOut';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      backgroundColor: '#1D1E28',
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },

      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: {
      ...theme.mixins.toolbar,

      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#1D1E28',
    },
    content: {
      flexGrow: 1,
      backgroundColor: '#d3d3d3',
      padding: theme.spacing(3),
    },
  })
);

export default function ResponsiveDrawer(props: any) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'inherit',
      }}
    >
      <div>
        <h1 style={{ color: 'white', padding: '8px 16px' }}>Apollo's Playlist</h1>
        <Divider />
        <List>
          <Link to={'/playlists'} style={{ textDecoration: 'none' }}>
            <ListItem button key={'Your Playlists'}>
              <MusicNote style={{ color: 'white' }} />
              <ListItemText primary={'Your Playlists'} style={{ color: 'white' }} />
            </ListItem>
          </Link>

          <Link to={'/create-playlist'} style={{ textDecoration: 'none' }}>
            <ListItem button key={'Create a Playlist'}>
              <MusicNote style={{ color: 'white' }} />
              <ListItemText primary={'Create a Playlist'} style={{ color: 'white' }} />
            </ListItem>
          </Link>
        </List>
        <Divider />
      </div>
      <div>
        <Profile />
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SignOut />
        </div>
      </div>
    </div>
  );

  const container = document.body;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Apollo's Playlist
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <React.Fragment>{drawer}</React.Fragment>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}
