import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        width:'100%',
        margin:'8em 0% 0% 0%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'black',
        color: 'white',
        padding: '1em',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <p>optica_milap@hotmail.com</p>
            <p>Cel: 316 6085291 - 314 8626164</p>
            <p>Barrio Antonio Nariño - Popayan </p>
            <p>Cra 10 # 17 N 45</p>
        </div>
    );
}
