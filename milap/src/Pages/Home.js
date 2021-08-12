import React from 'react';
import PrimarySearchAppBar from '../Components/Navigator.js';
import Carrusel from '../Components/Carousel.js';
import NestedList from '../Components/NestedList.js';
import SingleLineGridList from '../Components/SingleLineGridList.js';
import FullWidthGrid from '../Components/blackComponent.js';
import { makeStyles } from '@material-ui/core/styles';
import Date from './Date.js';
const useStyles = makeStyles((theme) => ({
    oText: {
        color: 'black',
        position: 'relative',
        fontSize: '1em',
        alignSelf: 'center',
        padding: '0% 0% 0% 10%',
        [theme.breakpoints.up('md')]: {
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
        { nombre: "ROSTROS", tipo: ["Rectangular", "Triangular", "Ovalado"] },
        { nombre: "DIAGNOSTICOS", tipo: ["Miopia",  "Hipermetropia", "Astigmatismo","Presbicia"] },
        { nombre: "MONTURAS", tipo: ["Pasta", "Metalica", "Acetato"] },
        { nombre: "LENTES", tipo: ["Monofocal", "Bifocal", "Progresivo"] },
    ];

    return (
        <div>
            <PrimarySearchAppBar />
            <Carrusel />
            <div className={classes.container}>
                <p className={classes.oText}>TUS OJOS, NUESTRO TESORO </p>
                <NestedList />
                <SingleLineGridList sections={sections} />
                <Date/>
            </div>

            <FullWidthGrid className={classes.footer} />

        </div>
    )
};
