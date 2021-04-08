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



export default function SingleLineGridList() {
  const classes = useStyles();
  {/*
  const sections = [
    { nombre: "rostos", tipo:["cuadrado","triangular","circular"]},
    { nombre: "diagnosticos", tipo:["miopia","astigmatismo","hipermetropia","presvicie"]},
    { nombre: "monturas", tipo:["pasta","metalica","acetato"]},
    { nombre: "lentes", tipo:["monofocal","bifocal","progresivo"]},
    { nombre: "contacto", tipo:["diario","semanal","mensual"]},
  ];
*/}


  const sections = [
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
  

  //console.log(section);
  //;
  return (
    <div>
      {(() => {
        const s = sections.map((section) => (section.map((sec) => (console.log(sec)))));

        {/* 

        for (let j = 0; j < 5; j++) {
          for (let i = 0; i < 5; i++) {
            var element = section[j];
            console.log(element)
          }
        }

         switch (section) {
             case 'h':
               return (
                 // mapeo la sectiona hija
                 <div>
                   <h3>TIPOS DE {section} </h3>
                   <div className={classes.root}>
                     <GridList className={classes.gridList} cols={2.5}>
                       {section.map((tile) => (
                         <SimpleCard name={'a'} />
                       ))}
                     </GridList>
                   </div></div>
              )
             case 'DIAGNOSTICOS':
               return (
                 <div><h3> {section} </h3>
                   <div className={classes.root}>
                     <GridList className={classes.gridList} cols={2.5}>
                       {section.map((tile) => (
                         <SimpleCard name={section} />
                       ))}
                     </GridList>
                   </div></div>
               )
             case 'MONTURAS':
               return (
                 <div><h3>TIPOS DE {section}</h3>
                   <div className={classes.root}>
                     <GridList className={classes.gridList} cols={2.5}>
                       {section.map((tile) => (
                         <SimpleCard name={section} />
                       ))}
                     </GridList>
                   </div></div>
               )
             case 'LENTES':
               return (
                <div>
                   <h3>TIPOS DE {section} </h3>
                   <div className={classes.root}>
                     <GridList className={classes.gridList} cols={2.5}>
                       {section.map((tile) => (
                         <SimpleCard name={section} />
                       ))}
                     </GridList>
                   </div></div>
               )
             case 'LENTES DE CONTACTO':
               return (
                 <div><h3>TIPOS DE {section} </h3>
                   <div className={classes.root}>
                     <GridList className={classes.gridList} cols={2.5}>
                       {section.map((tile) => (
                         <SimpleCard name={section} />
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
        */}
      }  //cierra la funcion flecha
      )()}
    </div>
  );
}
