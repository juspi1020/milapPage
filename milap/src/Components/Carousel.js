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
        { Image: "https://scontent.fclo1-2.fna.fbcdn.net/v/t1.0-9/121550792_3463690330373388_3873572868956219011_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeH9lPqrTDZfPEqTEsENLydsZpKmyYKai5hmkqbJgpqLmAOaS4thnTwcRhpKHysBKpI&_nc_ohc=qyNVvDB8OX0AX9P8M5D&_nc_ht=scontent.fclo1-2.fna&oh=3fbec9c5dd7f5c30be5af1b67ccd6cd3&oe=60793A01", },
        { Image: "https://scontent.fclo1-2.fna.fbcdn.net/v/t1.0-9/120121665_3377717465637342_539729171313230023_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeHgoTSkdvJ2Ul4MuI0FGPSNQG0EoXi8NKhAbQSheLw0qHIUXaHvXiBtQZD8SZXuc6g&_nc_ohc=sHfyVOV36AYAX83mG1p&_nc_ht=scontent.fclo1-2.fna&oh=13685df22ea7a5036c9f8388feee0f86&oe=6077FC54", },
        { Image: "https://scontent.fclo1-1.fna.fbcdn.net/v/t1.0-9/120019591_3375183599224062_7916692584140813094_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeHRZuel_x32rqD189CNCQsZfOJM9EugnCl84kz0S6CcKR9lNQLSqwDESzU00JE4ex8&_nc_ohc=RHW49EzED9MAX9WRwO1&_nc_ht=scontent.fclo1-1.fna&oh=20a26a67ea8577987417f984a6b06bf7&oe=60784D8C", }
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