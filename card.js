import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgCard() {
  const classes = useStyles();
  const [n1, setN1] = useState(100);
  const [n2, setN2] = useState(100);

  useEffect(()=>{
    setN1(Math.floor(Math.random() * (800 - 100 + 1)) + 100);
    setN2(Math.floor(Math.random() * (800 - 100 + 1)) + 100);
  },[])

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={"https://picsum.photos/" + n1 + "/" + n2}
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}