import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
//component
import Formlogin from '../components/form_login';
import FormRegister from '../components/form.register';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  root2: {
    '& > *': {
      width: '100%',
      marginTop: 20
    },
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none', overflow: 'hidden' }} position="static">
        <Tabs style={{ overflow: 'hidden', width: 500, margin: 'auto' }} value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab style={{ marginRight: 'auto', textTransform: 'none' }} label="Login" {...a11yProps(0)} />
          <Tab style={{ textTransform: 'none' }} label="Register" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Formlogin />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FormRegister />
      </TabPanel>
    </div>
  );
}
