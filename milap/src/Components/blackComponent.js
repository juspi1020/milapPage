import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
       
        bottom:'0',
        width:'100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor:'#000000' ,
        color: 'white',
        marginTop:'4em',
        padding: '1em',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <p>optica_milap@hotmail.com</p>
            <p>Cel: 316 6085291</p>
            <p>Cra 10 # 17 N 45</p>
            <p>Barrio Antonio Nariño - Popayan </p>
            
        </div>
    );
}
