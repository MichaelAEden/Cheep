import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  card: {
    width:'100%',
    borderRadius:5,
    marginTop:10,
    boxShadow: '0px 0px 0px'
  },
  media: {
    width:'100%',
    height: 0,
    paddingTop:'100%',
    borderRadius:5,

  },
});


const GroupInfo = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Grid container direction='column' style={{flex:1}}>
          <Grid container direction='row' style={{flexWrap:'nowrap'}} justify='space-between'>
            <Grid style={{width:'50%', marginRight:2}}>
            <CardMedia
              className={classes.media}
              image="https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.0-1/c2.0.160.160a/p160x160/32819495_1638426239611949_8467425576209088512_n.jpg?_nc_cat=109&cachebreaker=sd&_nc_oc=AQkPikgleir9CmrQzFZvlfZWEamsSjpvD_Lbc6NIwNKBwrwO28zrwRtE-JoFfKxFTME&_nc_ht=scontent.fyyz1-1.fna&oh=7e7b681e3286bcae01d1b9fef5c49903&oe=5E08A810"
              title="cardIcon"
            />
            </Grid>
            <Grid container direction='column' justify='space-between'  style={{width:'50%'}}>
              <Grid container direction='row' style={{flex:1, marginBottom:4}}>
                <Grid item style={{flex:1, marginRight:4}}>
                  <CardMedia

                    className={classes.media}
                    image="https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.0-1/c2.0.160.160a/p160x160/32819495_1638426239611949_8467425576209088512_n.jpg?_nc_cat=109&cachebreaker=sd&_nc_oc=AQkPikgleir9CmrQzFZvlfZWEamsSjpvD_Lbc6NIwNKBwrwO28zrwRtE-JoFfKxFTME&_nc_ht=scontent.fyyz1-1.fna&oh=7e7b681e3286bcae01d1b9fef5c49903&oe=5E08A810"
                    title="cardIcon"
                  />
                </Grid>
                <Grid item style={{flex:1}}>
                  <CardMedia
                    className={classes.media}
                    image="https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.0-1/c2.0.160.160a/p160x160/32819495_1638426239611949_8467425576209088512_n.jpg?_nc_cat=109&cachebreaker=sd&_nc_oc=AQkPikgleir9CmrQzFZvlfZWEamsSjpvD_Lbc6NIwNKBwrwO28zrwRtE-JoFfKxFTME&_nc_ht=scontent.fyyz1-1.fna&oh=7e7b681e3286bcae01d1b9fef5c49903&oe=5E08A810"
                    title="cardIcon"
                  />
                </Grid>
              </Grid>
              <Grid container direction='row' style={{flex:1}}>
                <Grid item style={{flex:1, marginRight:4}}>
                  <CardMedia

                    className={classes.media}
                    image="https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.0-1/c2.0.160.160a/p160x160/32819495_1638426239611949_8467425576209088512_n.jpg?_nc_cat=109&cachebreaker=sd&_nc_oc=AQkPikgleir9CmrQzFZvlfZWEamsSjpvD_Lbc6NIwNKBwrwO28zrwRtE-JoFfKxFTME&_nc_ht=scontent.fyyz1-1.fna&oh=7e7b681e3286bcae01d1b9fef5c49903&oe=5E08A810"
                    title="cardIcon"
                  />
                </Grid>
                <Grid item style={{flex:1}}>
                  <CardMedia

                    className={classes.media}
                    image="https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.0-1/c2.0.160.160a/p160x160/32819495_1638426239611949_8467425576209088512_n.jpg?_nc_cat=109&cachebreaker=sd&_nc_oc=AQkPikgleir9CmrQzFZvlfZWEamsSjpvD_Lbc6NIwNKBwrwO28zrwRtE-JoFfKxFTME&_nc_ht=scontent.fyyz1-1.fna&oh=7e7b681e3286bcae01d1b9fef5c49903&oe=5E08A810"
                    title="cardIcon"
                  />
                </Grid>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
          <CardContent style={{padding:5}}>
            <Grid container direction='row' justify='flex-start' alignItems='center'>
              <Typography noWrap direction='row' style={{fontSize:16, fontWeight:'bold', flex:18, color:'#ADADAD'}}>
                  Shopping List
              </Typography>
              <Grid item style={{flex:1}}>
                <IconButton aria-label="settings">
                  <img style={{height:7, paddingTop:5,  paddingBottom:10}} src="https://i.imgur.com/8TeekNs.png"  alt="Logo" />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
          </CardActionArea>
        </Card>
  )
}
export default GroupInfo;
