import React from 'react';
import { formatMs, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import SimpleCard from './SimpleCard.js';
import { Select } from '@material-ui/core';

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
  const sections= props;
  //const s = section.map((sec)=> sec);
  //const s = section.map((sec)=>(sec.map((a)=>a)));


  return (
    <div>
      {(() => {
        //sections.props.map(section=>(section))
        
          // switch (section) {
          //   case 'h':
          //     return (
          //       // mapeo la sectiona hija
          //       <div>
          //         <h3>TIPOS DE {section} </h3>
          //         <div className={classes.root}>
          //           <GridList className={classes.gridList} cols={2.5}>
          //             {section.map((tile) => (
          //               <SimpleCard name={'a'} />
          //             ))}
          //           </GridList>
          //         </div></div>
          //    )
          //   case 'DIAGNOSTICOS':
          //     return (
          //       <div><h3> {section} </h3>
          //         <div className={classes.root}>
          //           <GridList className={classes.gridList} cols={2.5}>
          //             {section.map((tile) => (
          //               <SimpleCard name={section} />
          //             ))}
          //           </GridList>
          //         </div></div>
          //     )
          //   case 'MONTURAS':
          //     return (
          //       <div><h3>TIPOS DE {section}</h3>
          //         <div className={classes.root}>
          //           <GridList className={classes.gridList} cols={2.5}>
          //             {section.map((tile) => (
          //               <SimpleCard name={section} />
          //             ))}
          //           </GridList>
          //         </div></div>
          //     )
          //   case 'LENTES':
          //     return (
          //      <div>
          //         <h3>TIPOS DE {section} </h3>
          //         <div className={classes.root}>
          //           <GridList className={classes.gridList} cols={2.5}>
          //             {section.map((tile) => (
          //               <SimpleCard name={section} />
          //             ))}
          //           </GridList>
          //         </div></div>
          //     )
          //   case 'LENTES DE CONTACTO':
          //     return (
          //       <div><h3>TIPOS DE {section} </h3>
          //         <div className={classes.root}>
          //           <GridList className={classes.gridList} cols={2.5}>
          //             {section.map((tile) => (
          //               <SimpleCard name={section} />
          //             ))}
          //           </GridList>
          //         </div></div>
          //     )
          //   default:
          //     return (
          //       <div>

          //       </div>
          //     )
          // }
        }
      )()}
    </div>
  );
}
