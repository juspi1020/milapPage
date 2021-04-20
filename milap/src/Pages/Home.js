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
    footer: {
        position: 'absolute',
    }

}));

export default function Home() {
    const classes = useStyles();
    const sections = [
        { nombre: "ROSTROS", tipo: ["cuadrado", "triangular", "circular"] },
        { nombre: "DIAGNOSTICOS", tipo: ["miopia",  "hipermetropia", "astigmatismo","presbicia"] },
        { nombre: "MONTURAS", tipo: ["pasta", "metalica", "acetato"] },
        { nombre: "LENTES", tipo: ["monofocal", "bifocal", "progresivo"] },
    ];

    return (
        <div>
            <PrimarySearchAppBar />
            <Carrusel />
            <div className={classes.container}>
                <p className={classes.oText}>TUS OJOS, NUESTRO TESORO </p>
                <NestedList />
                <SingleLineGridList sections={sections} />
            </div>
            <FullWidthGrid className={classes.footer} />

        </div>
    )
};
