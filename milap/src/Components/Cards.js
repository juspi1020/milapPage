import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
    {
      switch (tipo) {
        case 'cuadrado':
          
          return (
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
              </CardContent>
            </Collapse>

          )

        case 'triangular':
          setExpanded(!expanded);
          return (
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  triangular
                </Typography>
              </CardContent>
            </Collapse>
          )
        case 'circular':
          setExpanded(!expanded);
          return (
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  circular
                </Typography>
              </CardContent>
            </Collapse>
          );

        default:
          break;
      }
    };
  };

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
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

    </Card>
  );
}
