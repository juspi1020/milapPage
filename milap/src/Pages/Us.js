import React from 'react';
import PrimarySearchAppBar from '../Components/Navigator.js';
import { makeStyles } from '@material-ui/core/styles';
import FullWidthGrid from '../Components/blackComponent.js';
// import facebook from '../Images/facebook.svg';
// import instagram from '../Images/instagram.svg';
// import whatsapp from '../Images/whatsapp.svg';

const useStyles = makeStyles((theme) => ({
    title: {
        padding: '5em 0em 0em 1em'
    },
    content: {
        textAlign:'justify',
        padding: '1em 3em 0em 3em'
    },
    imgcontent: {
        display: 'flex',
        padding: '0em 0em 0em 0em ',
    },
    img: {
        padding: '1.3em',
        ['@media (min-width:960px)']: {
            padding: '2em',
            
        },
    },
    
}));

export default function Us() {
    const classes = useStyles();
    return (
        <div>
            <PrimarySearchAppBar />
            <div className={classes.title}>
                <h2>SOBRE NOSOTROS</h2>
            </div>
            <div className={classes.content}>
                <h3>MISION</h3>
                <p>Somos una empresa privada que cuenta con optometras altamente capacitados en la atención primaria en salud visual para la prevencion, evaluacion y tratamiento de los problemas oculares. Creada para brindar a sus pacientes excelencia y atencion, calidad en el servicio y las mejores tarifas. Cubrimos todo el campo de la optometria y ofrecemos programas especiales para empresas, estudiantes y grupos familiares. </p>
                <h3>VISION</h3>
                <p>Ser la primera organizacion en la prestacion de servicios en salud visual integral, fundamentados en la idoineidad, el profesionalismo, el bienestar de lso pacientes, la eficiencia en los servicios, la innovacion del conocimiento cientifico y la formacion.</p>
            </div>
                {/* <h3>NUESTRAS REDES</h3>
            </div>
            <div className={classes.imgcontent} >
                <a className={classes.img} href='https://api.whatsapp.com/send?phone=573166085291'>
                    <img className={classes.img} src={whatsapp} alt={whatsapp} />
                </a>
                <a className={classes.img} href='https://www.facebook.com/opticamilap2019'>
                    <img className={classes.img} src={facebook} alt={facebook} />
                </a>
                <a className={classes.img} href='https://www.instagram.com/opticamilap/?hl=es'>
                    <img className={classes.img} src={instagram} alt={instagram} />
                </a>
            </div> */}
            <FullWidthGrid />
        </div>
    )
};
