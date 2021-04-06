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

const section = [
  //ROSTROS   
  ['CIRCULAR', 'TRIANGULAR', 'CUADRADO'],
  //DIAGNOSTICOS   
  ['MIOPIA', 'ASTIGMATISMO', 'HIPERMETROPIA', 'PRESVICIE'],
  //MONTURAS   
  ['PASTA', 'METALICA', 'ACETATO'],
  //LENTES   
  ['MONOFOCAL', 'BIFOCAL', 'PROGRESIVO'],
  //LENTES DE CONTANCTO 
  ['DIARIO', 'SEMANAL', 'MENSUAL']
];


export default function SingleLineGridList() {
  const classes = useStyles();
  const switchlist = section.map((sec) => sec);
  

  return (
    <div>
      {(() => {
        console.log(switchlist);
          for(i, switchlist.length,i++){
            for(j, switchlist.length,j++){
              
            }
          }
        // switch (switchlist) {
        //   case 'ROSTROS':
        //     return (
        //       // mapeo la lista hija
        //       <div>
        //         <h3>TIPOS DE {switchlist} </h3>
        //         <div className={classes.root}>
        //           <GridList className={classes.gridList} cols={2.5}>
        //             {section.map((tile) => (
        //               <SimpleCard name={switchlist} />
        //             ))}
        //           </GridList>
        //         </div></div>
        //     )
        //   case 'DIAGNOSTICOS':
        //     return (
        //       <div><h3> {switchlist} </h3>
        //         <div className={classes.root}>
        //           <GridList className={classes.gridList} cols={2.5}>
        //             {section.map((tile) => (
        //               <SimpleCard name={switchlist} />
        //             ))}
        //           </GridList>
        //         </div></div>
        //     )
        //   case 'MONTURAS':
        //     return (
        //       <div><h3>TIPOS DE {switchlist}</h3>
        //         <div className={classes.root}>
        //           <GridList className={classes.gridList} cols={2.5}>
        //             {section.map((tile) => (
        //               <SimpleCard name={switchlist} />
        //             ))}
        //           </GridList>
        //         </div></div>
        //     )
        //   case 'LENTES':
        //     return (
        //       <div>
        //         <h3>TIPOS DE {switchlist} </h3>
        //         <div className={classes.root}>
        //           <GridList className={classes.gridList} cols={2.5}>
        //             {section.map((tile) => (
        //               <SimpleCard name={switchlist} />
        //             ))}
        //           </GridList>
        //         </div></div>
        //     )
        //   case 'LENTES DE CONTACTO':
        //     return (
        //       <div><h3>TIPOS DE {switchlist} </h3>
        //         <div className={classes.root}>
        //           <GridList className={classes.gridList} cols={2.5}>
        //             {section.map((tile) => (
        //               <SimpleCard name={switchlist} />
        //             ))}
        //           </GridList>
        //         </div></div>
        //     )
        //   default:
        //     return (
        //       <div></div>
        //     )
        // }
      }
      )
      ()
      }
    </div>
  );
}
