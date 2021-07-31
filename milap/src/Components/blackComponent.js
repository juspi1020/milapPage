import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'black',
        color: 'white',
        marginTop: '2em',
        padding: '0.5em',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <p>optica_milap@hotmail.com - cel: 316 608 52 91</p>
            <p>Cra 10 # 17 N 45 Barrio Antonio Nariño - Popayan</p>
        </div>
    );
}
