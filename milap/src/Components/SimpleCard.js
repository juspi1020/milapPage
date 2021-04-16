import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Images from './images.js';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    alignItems:'center',
    textAlign:'center',
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  Images:{
    height:'1%'
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const tipo = props.name;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {tipo}
        </Typography>
        < Images className={classes.Images} tipo={tipo}/>
      </CardContent>
      <CardActions>
        <Button size="small">Saber Más</Button>
      </CardActions>
    </Card>
  );
}
