import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import SimpleCard from '../Components/card.js';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    margin: '1em',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));


// The example data is structured as follows:


const tileData = [1, 8, 8];

export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div>
      <h3>TIPOS DE ROSTROS</h3>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {tileData.map((tile) => (
            <SimpleCard name={"cuadrado"} />
          ))}
        </GridList>
      </div>
    </div>
  );
}
