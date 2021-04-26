import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    size: {
        paddingTop: '4em',
        position: 'initial',
        width: '100%',
        ['@media (min-width:960px)']: {
            paddingTop: '3em',
            width: '40%',
            position:'absolute'
        }
    },
    ima: {
        objectFit: 'cover',
        objectposition: 'center',
        width: '100%',

    }
}));

export default function Carrusel() {
    const classes = useStyles();

    var items = [
        { Image: "https://i.imgur.com/4Q4NHZQ.jpg" },
        { Image: "https://i.imgur.com/tb36TSq.jpg"},
        { Image: "https://i.imgur.com/3Uhv8e2.jpg" }
    ]

    return (
        <Carousel className={classes.size} navButtonsProps={{ style: { backgroundColor: 'unset', color: 'transparent' } }} >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }

        </Carousel>

    )
}


function Item(props) {

    const classes = useStyles();
    return (
        <div>
            <Paper>
                <img src={props.item.Image} className={classes.ima} alt="Carousel"></img>
            </Paper>
        </div>

    )
}