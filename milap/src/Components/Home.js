import React from 'react';
import Navigator from '../Components/Navigator.js';
import List from '../Components/List.js';
import Carousel from '../Components/Carousel.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    Texto: {
        color:'black',
        position:'relative',
        fontSize:'1em',
        padding:'0% 0% 0% 0%',
     ['@media (min-width:960px)']: {
        fontSize:'5em',
        padding:'25% 0% 0% 40%',
    }
    },
}));

export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <Navigator  />
            <Carousel />
            <p className={classes.Texto}> LO MEJOR PARA TUS OJOS </p>
            <List />
        </div>
    )
};
