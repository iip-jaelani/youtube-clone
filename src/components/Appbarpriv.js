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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';

import {
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
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const data = localStorage.getItem('data');
  console.log(data, "---------------------------------------------------------------------------------------------------");
  const handleLogout = () => {
    var loc = localStorage.removeItem('session')
    window.location.replace('/login')
  }
  const user = JSON.parse(localStorage.getItem('session'));
  console.log(user);

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none' }} position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <img style={{ height: 30 }} src={require('../images/logo.svg')} />
            <Hidden only="sm">
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
            <Avatar onClick={handleClick} alt='' src="/static/images/avatar/3.jpg" />
            <div>
              <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <div style={{ width: 300 }}>
                  {user ?
                    <MenuItem>
                      <Avatar alt={user.username} src="/static/images/avatar/3.jpg" />
                      <p style={{ marginLeft: 20 }}>{user.username}</p>
                    </MenuItem>
                    : null}
                  <MenuItem style={{ textDecoration: 'none', color: '#333' }} onClick={handleClose}>Profile</MenuItem>
                  <Link style={{ textDecoration: 'none', color: '#333' }} to="/share">
                    <MenuItem onClick={handleClose}>Share videos</MenuItem>
                  </Link>
                  <MenuItem style={{ textDecoration: 'none', color: '#333' }} onClick={handleLogout}>Logout</MenuItem>
                </div>
              </Menu>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}