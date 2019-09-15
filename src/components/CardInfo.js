import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  card: {
    width: '30%',
    borderRadius:5,
    marginTop:15,
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)',

  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9,

  },
});

const CardInfo = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>


        <CardMedia

          className={classes.media}
          image="https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.0-1/c2.0.160.160a/p160x160/32819495_1638426239611949_8467425576209088512_n.jpg?_nc_cat=109&cachebreaker=sd&_nc_oc=AQkPikgleir9CmrQzFZvlfZWEamsSjpvD_Lbc6NIwNKBwrwO28zrwRtE-JoFfKxFTME&_nc_ht=scontent.fyyz1-1.fna&oh=7e7b681e3286bcae01d1b9fef5c49903&oe=5E08A810"
          title="cardIcon"
        />


        <CardContent>
          <Grid container direction='row' alignItems='center' justify='center' style={{padding:10}}>
            <Box fontWeight="fontWeightBold" fontSize={15} justify='center' lineHeight={1.0} style={{minWidth:40, color:'#ADADAD'}} >
             $0.35
            </Box>
            <Box justify='center'style={{minWidth:23, paddingLeft:17, color:'#ADADAD'}}>
              <img style={{height:15}} src="https://image.flaticon.com/icons/svg/149/149156.svg"  alt="Logo" />
            </Box>

          </Grid>
        </CardContent>

    </CardActionArea>
    </Card>
  );
}

export default CardInfo
