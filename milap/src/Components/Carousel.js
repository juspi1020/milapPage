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
        { Image: "https://scontent.fclo1-2.fna.fbcdn.net/v/t1.6435-0/s640x640/120084506_3377715548970867_5802172443243697732_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=a26aad&_nc_ohc=UkFIhFw-u2YAX8dN-Ab&_nc_ht=scontent.fclo1-2.fna&tp=7&oh=48440a43a88e9cc967f50cd3743dcaba&oe=609575EE", },
        { Image: "https://scontent.fclo1-2.fna.fbcdn.net/v/t1.0-9/120121665_3377717465637342_539729171313230023_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeHgoTSkdvJ2Ul4MuI0FGPSNQG0EoXi8NKhAbQSheLw0qHIUXaHvXiBtQZD8SZXuc6g&_nc_ohc=sHfyVOV36AYAX83mG1p&_nc_ht=scontent.fclo1-2.fna&oh=13685df22ea7a5036c9f8388feee0f86&oe=6077FC54", },
        { Image: "https://scontent.fclo1-2.fna.fbcdn.net/v/t1.6435-0/s640x640/120019591_3375183599224062_7916692584140813094_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=a26aad&_nc_ohc=u-ralvApUSUAX8nwtRM&_nc_ht=scontent.fclo1-2.fna&tp=7&oh=d862d8066aaa92962b010df1153f6660&oe=60957624", }
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