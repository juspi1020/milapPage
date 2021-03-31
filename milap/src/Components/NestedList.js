import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
        position:'sticky',
        width: '100%',
        marginTop: '0%',
        color: 'black',
        backgroundColor: theme.palette.background.paper,
        ['@media (min-width:960px)']: {
            marginTop: '25%',
            
        },
    },
    color:{
        color:'black',
        fontSize:'150%',
        display:'flex'
    }
}));

export default function NestedList() {
    const classes = useStyles();

    return (
        <List aria-labelledby="nested-list-subheader" className={classes.root}>
            <h3>SERVICIOS</h3>
            <ListItem button >
                <ListItemText primary="Visiometria" />
            </ListItem>
            <ListItem button>
               
                <ListItemText primary="Certificacion visual para colegio" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Adaptacion de lentes" />
            </ListItem>
        </List>
    );
}
