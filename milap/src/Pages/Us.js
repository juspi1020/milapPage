import React from 'react';
import PrimarySearchAppBar from '../Components/Navigator.js';
import { makeStyles } from '@material-ui/core/styles';
import BlackComponent from '../Components/blackComponent.js';


const useStyles = makeStyles((theme) => ({
    title: {
        padding: '5em 0em 0em 1em'
    },
    content: {
        textAlign: 'justify',
        padding: '1em 3em 0em 3em'

    },
    imgcontent: {
        display: 'flex',
        padding: '0em 0em 0em 0em ',
    },
    img: {
        padding: '1.3em',
        [theme.breakpoints.up('md')]: {
            padding: '2em',

        },
    },
    covenants: {
        display: 'flex',
    },
    large: {
        minWidth: '3em',
        minHeight: '3em',
    },
    position: {
        margin: '2%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    margin: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-around',
        justifyContent: 'space-between',
        width: 'auto',
        height: '100vh',
    }
}));

export default function Us() {
    const classes = useStyles();
    return (
        <div>
            <PrimarySearchAppBar />

            <div className={classes.margin}>
                <div><div className={classes.title}>
                    <h2>SOBRE NOSOTROS</h2>
                </div>
                    <div className={classes.content}>
                        <h3>MISION</h3>
                        <p>Somos una empresa privada que cuenta con optometras altamente capacitados en la atención primaria en salud visual para la prevencion, evaluacion y tratamiento de los problemas oculares. Creada para brindar a sus pacientes excelencia y atencion, calidad en el servicio y las mejores tarifas. Cubrimos todo el campo de la optometria y ofrecemos programas especiales para empresas, estudiantes y grupos familiares. </p>
                        <h3>VISION</h3>
                        <p>Ser la primera organizacion en la prestacion de servicios en salud visual integral, fundamentados en la idoineidad, el profesionalismo, el bienestar de lso pacientes, la eficiencia en los servicios, la innovacion del conocimiento cientifico y la formacion.</p>
                    </div>
                </div>
                <BlackComponent />
            </div>
        </div>
    )
};
