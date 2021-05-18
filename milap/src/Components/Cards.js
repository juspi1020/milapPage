import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DescriptionCard from './DescriptionCard.js';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Images from './images.js';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    alignItems: 'center',
    textAlign: 'center',
    margin:'0.5em',
    
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const tipo = props.name;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  }


  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {tipo}
        </Typography>
        < Images className={classes.Images} tipo={tipo} />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
         
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <CardContent>
        < Collapse in={expanded} timeout="auto" unmountOnExit >
          <DescriptionCard tipo={tipo} />
        </Collapse >
      </CardContent>
    </Card>
  );
}
