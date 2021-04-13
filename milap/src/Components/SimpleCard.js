import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import circular from '../Images/rostro_circular.svg';
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
    const {tipo} = props;

    console.log(tipo);

    return (
        <Card className={classes.root}>
            <CardContent>
                <img src={tipo} alt={tipo} />
            </CardContent>
            <CardActions>
                <Typography variant="body2" component="p">
                    <p>{"a veces me odio y a veces me amo"} {tipo}</p>
                </Typography>
            </CardActions>

        </Card>
    );
}
