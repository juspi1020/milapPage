import React from 'react';
import PrimarySearchAppBar from '../Components/Navigator.js';
import BasicTextFields from '../Components/BasicTextFields.js';
import { makeStyles } from '@material-ui/core/styles';
import MaterialUIPickers from '../Components/DatePicker.js';
import ControlledOpenSelect from '../Components/SelectionPicker.js';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    textfield: {
        padding: '5em 2em 0em 2em',

    },
    position: {
        margin: '2em 0% 0% 0%'
    },
}));



export default function Us() {
    const classes = useStyles();

    return (
        <div>
            <PrimarySearchAppBar />
            <div className={classes.textfield} >
                <h3>AGENDA TU CITA</h3>
                <BasicTextFields id="nombre" labelname={'NOMBRES'} />
                <BasicTextFields id="apellidos" labelname={'APELLIDOS'} />
                <ControlledOpenSelect id="tipoDocumento" />
                <BasicTextFields id="documento" labelname={'NUMERO DE DOCUMENTO'} />
                <BasicTextFields id="celular" labelname={'CELULAR'} />
                <MaterialUIPickers id="horaCita" />
                <Button id="agendar" variant="outlined" className={classes.position} >AGENDAR</Button>
              
            </div>
        </div>
    )
};

