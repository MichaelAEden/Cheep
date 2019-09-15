import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/styles';
import { sizing } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';



const searchBar = {
  iconContainer: {
    height:16,
    width:20,
    paddingRight:3,

    alignItems:'center',
  },
};

  const ToolBar = props => (
    <Grid container direction='row' justify='space-between' alignItems="center" style={{paddingLeft:10}}>
      <Grid item xs={12} md={12} style={{paddingRight:10}}>
        <InputBase
          className={'SearchInput-root'}
          placeholder={"Search..."}
          startAdornment={
            <SvgIcon style={searchBar.iconContainer}>
              <path fill='#ADADAD' d="M19.129,18.164l-4.518-4.52c1.152-1.373,1.852-3.143,1.852-5.077c0-4.361-3.535-7.896-7.896-7.896
    								c-4.361,0-7.896,3.535-7.896,7.896s3.535,7.896,7.896,7.896c1.934,0,3.705-0.698,5.078-1.853l4.52,4.519
    								c0.266,0.268,0.699,0.268,0.965,0C19.396,18.863,19.396,18.431,19.129,18.164z M8.567,15.028c-3.568,0-6.461-2.893-6.461-6.461
    								s2.893-6.461,6.461-6.461c3.568,0,6.46,2.893,6.46,6.461S12.135,15.028,8.567,15.028z"/>
            </SvgIcon>}
          {...props}
          fullWidth={true}
        />
      </Grid>


    </Grid>
  );

  export default ToolBar;
