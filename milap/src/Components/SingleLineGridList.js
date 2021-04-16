import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import SimpleCard from './SimpleCard.js';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    margin: '1em',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
}));

export default function SingleLineGridList(props) {
  const classes = useStyles();
  const sections = props.sections;
  return (
    <div>

      {
        sections.map((sec, index) => {
          switch (sec.nombre) {
            case 'ROSTROS':
              return (
                <div>
                  <h3>TIPOS DE {sec.nombre} </h3>
                  <div className={classes.root}>
                    <GridList className={classes.gridList} key={index} cols={2.5}>
                      {sec.tipo.map((types, index) => (
                       <SimpleCard name={types}/>
                      ))}
                    </GridList>
                  </div></div>
              )
            case 'DIAGNOSTICOS':
              return (
                <div>
                  <h3>TIPOS DE {sec.nombre} </h3>
                  <div className={classes.root}>
                    <GridList className={classes.gridList} key={index} cols={2.5}>
                      {sec.tipo.map((types, index) => (
                    <SimpleCard name={types}/>
                      ))}
                    </GridList>
                  </div></div>
              )
            case 'MONTURAS':
              return (
                <div>
                  <h3>TIPOS DE {sec.nombre} </h3>
                  <div className={classes.root}>
                    <GridList className={classes.gridList} key={index} cols={2.5}>
                      {sec.tipo.map((types, index) => (
                     <SimpleCard name={types}/>
                      ))}
                    </GridList>
                  </div></div>
              )
            case 'LENTES':
              return (
                <div>
                  <h3>TIPOS DE {sec.nombre} </h3>
                  <div className={classes.root}>
                    <GridList className={classes.gridList} key={index} cols={2.5}>
                      {sec.tipo.map((types, index) => (
                        <SimpleCard name={types}/>
                      ))}
                    </GridList>
                  </div>
                </div>
              )
            case 'LENTES DE CONTACTO':
              return (
                <div>
                  <h3>TIPOS DE {sec.nombre} </h3>
                  <div className={classes.root}>
                    <GridList className={classes.gridList} key={index} cols={2.5}>
                      {sec.tipo.map((types, ) => (
                      
                        <SimpleCard name={types}/>
                      ))}
                    </GridList>
                  </div></div>
              )
            default:
              return (
                <div>
                </div>
              )
          }
        })
      }


    </div>
  );
}




