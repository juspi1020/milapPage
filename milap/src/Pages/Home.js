import React from 'react';
import PrimarySearchAppBar from '../Components/Navigator.js';
import Carrusel from '../Components/Carousel.js';
import NestedList from '../Components/List.js';
import SimpleContainer from '../Components/oList.js';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    oText: {
        color: 'black',
        position: 'relative',
        fontSize: '1em',
        padding: '0% 0% 0% 0%',
        ['@media (min-width:960px)']: {
            fontSize: '5em',
            padding: '25% 0% 0% 40%',
        }
    },
}));

export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <PrimarySearchAppBar />
            <Carrusel />
            <p className={classes.oText}> LO MEJOR PARA TUS OJOS </p>
            <NestedList />
            <SimpleContainer/>
        </div>
    )
};
