import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import { TextField } from '@material-ui/core';

//icons
import Icon from '@material-ui/core/Icon';
//
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
//images
import Logo from '../images/logo.svg'
//react
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row'
  },
  underline: {
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  },
  button: {
    boxShadow: theme.shadows = []

  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none' }} position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <img style={{ height: 30 }} src={require('../images/logo.svg')} />
            <Hidden mdDown>
              <div style={{ margin: 'auto' }}>
                <TextField placeholder="Search" InputProps={{ classes }} style={{ width: 600, border: '1px solid #aaa', padding: 2, paddingLeft: 10 }} />
                <Button>
                  <SearchIcon style={{ textAlign: 'center', padding: 2, boxShadow: "none", MozBoxShadow: 'none' }} />
                </Button>
              </div>
            </Hidden>
          </Typography>
          <div style={{ color: '#777', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <VideoCallIcon className={classes.menuButton} />
            <AppsIcon className={classes.menuButton} />
            <NotificationsIcon className={classes.menuButton} />
            <Link style={{ textDecoration: 'none' }} to='/login'>
              <Button className={classes.button}>
                Login
            </Button>
            </Link>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
