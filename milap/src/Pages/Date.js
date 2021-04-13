import React from 'react';
import PrimarySearchAppBar from '../Components/Navigator.js';
import BasicTextFields from '../Components/BasicTextFields.js';
import { makeStyles } from '@material-ui/core/styles';
import MaterialUIPickers from '../Components/DatePicker.js';
import ControlledOpenSelect from '../Components/SelectionPicker.js';
import FullWidthGrid from '../Components/blackComponent.js';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    textfield: {
        padding: '5em 2em 0em 2em',

    },
    position:{
        margin:'2em 0% 0% 0%'
    },
   
   
}));

export default function Us() {
    const classes = useStyles();

    return (
        <div>
            <PrimarySearchAppBar />
            <div className={classes.textfield} >
                <h3>AGENDA TU CITA</h3>
                <BasicTextFields labelname={'NOMBRES'} />
                <BasicTextFields labelname={'APELLIDOS'} />
                <ControlledOpenSelect/>
                <BasicTextFields labelname={'NUMERO DE DOCUMENTO'} />
                <BasicTextFields labelname={'CELULAR'} />
                <MaterialUIPickers/>
                <Button variant="outlined" className={classes.position} >AGENDAR</Button>
            </div>
            <FullWidthGrid />
        </div>
    )
};
