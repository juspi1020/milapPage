import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
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
    // nested: {
    //     paddingLeft: theme.spacing(4),
    // },
}));

export default function NestedList() {
    const classes = useStyles();

    return (
        <List
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader   className={classes.color} component="div" id="nested-list-subheader">
                    SERVICIOS
                </ListSubheader>
            }
            className={classes.root}
        >
            <ListItem button >
                <ListItemText primary="Visiometria" />
            </ListItem>
            <ListItem button>
               
                <ListItemText primary="Certificacion visual para colegio" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Adaptacion de lentes" />
            </ListItem>




            {/* <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse> */}
        </List>
    );
}
