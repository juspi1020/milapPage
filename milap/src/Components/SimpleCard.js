import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import ROSTROS from '../Images/rostro_circular.svg';
// import cuadrado from '../Images/rostro_cuadrado.svg';
// import triangular from '../Images/rostro_triangular.svg';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard(props) {
    const classes = useStyles();
    const {name} = props;

    return (
        <Card className={classes.root}>
            <CardContent>
                <img src={name} alt={name} />
            </CardContent>  
            <CardActions>
                <Typography variant="body2" component="p">
                    <p>{name}</p>
                </Typography>
            </CardActions>

        </Card>
    );
}
