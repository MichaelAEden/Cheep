import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    width: '30%',
    borderRadius: 5,
    marginTop: 15,
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)'
  },
  media: {
    height: 0,
    paddingTop: '100%' // 16:9,
  }
});

export default props => {
  const classes = useStyles();

  const { image, price } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title="cardIcon" />
        <CardContent>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            style={{ padding: 10 }}
          >
            <Box
              fontWeight="fontWeightBold"
              fontSize={15}
              justify="center"
              lineHeight={1.0}
              style={{ minWidth: 40, color: '#ADADAD' }}
            >
              ${(price / 100.0).toFixed(2)}
            </Box>
            <Box
              justify="center"
              style={{ minWidth: 23, paddingLeft: 17, color: '#ADADAD' }}
            >
              <img
                style={{ height: 15 }}
                src="https://image.flaticon.com/icons/svg/149/149156.svg"
                alt="Logo"
              />
            </Box>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
