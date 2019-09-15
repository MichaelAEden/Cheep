import React, { useState } from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ContainedTabs from './components/ContainedTabs';
import ToolBar from './components/ToolBar'
import { ThemeProvider } from "@material-ui/styles";
import PropTypes from 'prop-types';
import createOverrides from './components/theme';
import Typography from '@material-ui/core/Typography';
import GroupInfo from './components/GroupInfo';
import CardInfo from './components/CardInfo';
import Footer from './components/Footer';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';



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
      <Box style={{paddingLeft:10, paddingRight:10}}>{children}</Box>
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
    paddingTop:15,
  },
}));


const baseTheme = createMuiTheme()

function App() {
  function handleChange(event, newValue) {
  setValue(newValue);
}
  const classes = useStyles();
  const [value, setValue] = useState(0);
  return (
  <ThemeProvider
    theme={{
      ...baseTheme,
      overrides: createOverrides(baseTheme)
    }}>
  <Grid container justify="center" style={{padding:10}}>
    <Grid container direction='column' justify='center' alignItems='center' style={{position:'fixed', zIndex:99, top:0, backgroundColor:'white'}}>
      <Grid container direction='row' alignItems='center' justify='center' style={{backgroundColor:'#22B8BC', height:40, flex:1, minWidth:375}}>
        <Box>
          <img style={{height:21, paddingTop:10,  paddingBottom:10}} src="https://i.imgur.com/AZ2oR9Z.png"  alt="Logo" />
        </Box>
        <Box style={{paddingLeft:5}}>
          <img style={{height:21, paddingTop:10,  paddingBottom:10}} src="https://i.imgur.com/bc90eKF.png"  alt="Logo" />
        </Box>
        <Box style={{opacity:0, paddingLeft:10}}>
          <img style={{height:21, paddingTop:10,  paddingBottom:10}} src="https://i.imgur.com/AZ2oR9Z.png"  alt="Logo" />
        </Box>

      </Grid>

      <Grid item style={{paddingTop:20, paddingBottom:20}}>
        <ContainedTabs
              tabs={[
                { label: 'All Items' },
                { label: 'My Lists' },
              ]}
              value={value}
              onChange={(e, i) => setValue(i)}
            />
      </Grid>
    </Grid>
    <Grid item container style={{paddingTop:105}}>

    <ToolBar/>

    </Grid>

    <TabPanel value={value} index={0}>
    <Grid container justify='space-between' alignItems='flex-start'>
      <CardInfo/>
      <CardInfo/>
      <CardInfo/>
      <CardInfo/>
      <CardInfo/>
      <CardInfo/>
      <CardInfo/>
      <CardInfo/>
      <CardInfo/>
      <CardInfo/>
      <CardInfo/>

      <CardInfo/>

    </Grid>
    </TabPanel>

    <TabPanel value={value} index={1}>
      <Grid container justify='space-between' alignItems='flex-start'>
      <GroupInfo/>
      <GroupInfo/>
      <GroupInfo/>

      </Grid>
    </TabPanel>

    <Grid justify='flex-end' style={{position: 'fixed',bottom: 0, width: '100%', backgroundColor:'white',paddingBottom:5}}>
      <Footer/>
    </Grid>

  </Grid>
  </ThemeProvider>

  );
}


export default App;