import React from 'react';
import PrimarySearchAppBar from '../Components/Navigator.js';
import Carrusel from '../Components/Carousel.js';
import NestedList from '../Components/NestedList.js';
import SingleLineGridList from '../Components/SingleLineGridList.js';
import FullWidthGrid from '../Components/blackComponent.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    oText: {
        color: 'black',
        position: 'relative',
        fontSize: '1em',
        alignSelf: 'center',
        padding: '0% 0% 0% 10%',
        ['@media (min-width:960px)']: {
            fontSize: '3em',
            padding: '25% 0% 0% 45%',
        }
    },
    container: {
        margin: '1em',
    },
}));

export default function Home() {
    const classes = useStyles();
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
    return (
        <div>
            <PrimarySearchAppBar />
            <Carrusel />
            <div className={classes.container}>
                <p className={classes.oText}>TUS OJOS, NUESTRO TESORO </p>
                <NestedList />
                {sections.map((sec) => (
                    <SingleLineGridList sections={sections} />
                ))}

                {/* <SingleLineGridList switchlist={'ROSTROS'} />
                <SingleLineGridList switchlist={'DIAGNOSTICOS'} />
                <SingleLineGridList switchlist={'MONTURAS'} />
                <SingleLineGridList switchlist={'LENTES'} />
                <SingleLineGridList switchlist={'LENTES DE CONTACTO'} /> */}
            </div>
            <FullWidthGrid />
        </div>
    )
};
