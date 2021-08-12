import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';
import TextField from '@material-ui/core/TextField';
import PrimarySearchAppBar from '../Components/Navigator.js';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            [theme.breakpoints.up('sm')]: {
                width: '40%',
            }
        },
    },
    formControl: {
        margin: theme.spacing(0),
        width: '100%',

    },
    textfield: {
        padding: '5em 2em 0em 2em',
        width: '100%',

    },
    button: {
        position: 'absolute',
        margin: '2em 0em 0em 0em',
        maxWidth: '7em',
    },

}));




const Date = () => {
    const classes = useStyles();
    const frmContact = { userName: '', document: '', number: '', phone: '', date: '' };
    const [contact, setContact] = useState(frmContact);

    const handleChange = e => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const validate = (newState) => () => {
        if (validate) {
            setState({ message: 'Cita Agendada', ...newState });
        }
    };


    const [state, setState] = React.useState({
        open: false,
        validate: false,
        vertical: 'top',
        horizontal: 'center',
        message: 'Cita Agendada',
    });

    const { vertical, horizontal, open, message } = state;

    const handleSubmit = e => {
        e.preventDefault();
        emailjs.send('default_service', 'template_61mxqpm', contact, 'user_1y3e7SWa6ujxgkJcPkxkH')
            .then((response) => {
                state.open = 'true';
                console.log('SUCCESS!', response.status, response.text);
                setContact(frmContact);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }


    return (
        <div className={classes.root}>
            <PrimarySearchAppBar />

            <form onSubmit={handleSubmit}>
                <div className={classes.textfield}>
                    <h3> AGENDA TU CITA </h3>
                    <TextField
                        id="standard-basic"
                        label="Nombres"
                        required
                        type="text"
                        value={contact.userName}
                        name="userName"
                        onChange={handleChange}
                        className="form-control" />

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Tipo de Documento</InputLabel>
                        <Select
                            required
                            labelId="demo-simple-select-label"
                            id="document"
                            name="document"
                            value={contact.document}
                            onChange={handleChange}
                        >
                            <MenuItem value={'RC'}>Registro Civil</MenuItem>
                            <MenuItem value={'TI'}>Tarjeta de Identidad</MenuItem>
                            <MenuItem value={'CC'}>Cedula de Ciudadania</MenuItem>
                            <MenuItem value={'CE'}>Cedula de Extangeria</MenuItem>
                            <MenuItem value={'Otro'}>Otro</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        id="standard-basic"
                        label="Numero de Documento"
                        required
                        type="number"
                        value={contact.number}
                        name="number"
                        onChange={handleChange}
                        className="form-control" />

                    <TextField
                        id="date"
                        required
                        value={contact.date}
                        label="Fecha y Hora"
                        name="date"
                        type="datetime-local"
                        className="form-control"
                        onChange={handleChange}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="celular"
                        required type="number"
                        value={contact.phone}
                        name="phone"
                        onChange={handleChange}
                        className="form-control" />

                    <div className="pt-3" >
                        <button className="btn btn-dark" onClick={validate({ vertical: 'bottom', horizontal: 'left' })}>AGENDAR</button>
                    </div>
                    <Snackbar

                        anchorOrigin={{ vertical, horizontal }}
                        open={open}
                        onClose={handleClose}
                        message={message}
                        key={vertical + horizontal}
                    />
                </div>
            </form>
        </div>
    );
}
export default Date;




//     return (
//         <div >
//             <PrimarySearchAppBar />
//             <div className={classes.textfield} >
//                 <h3>AGENDA TU CITA</h3>
//                 <form onSubmit={formik.handleSubmit} className={classes.root} noValidate autoComplete="off">
//                     <TextField
//                         id='name'
//                         label='NOMBRE'
//                         name="firstName"
//                         type="text"
//                         onChange={formik.handleChange}
//                         value={formik.values.firstName}
//                     />
//                     <TextField
//                         id='lastname'
//                         label='APELLIDO'
//                         name="lastName"
//                         type="text"
//                         onChange={formik.handleChange}
//                         value={formik.values.lastName}
//                     />
//                     <FormControl className={classes.formControl}>
//                         <InputLabel id="demo-simple-select-label">TIPO DE DOCUMENTO</InputLabel>
//                         <Select
//                             labelId="demo-simple-select-label"
//                             id="doc"
//                             name="doc"
//                             value={formik.values.doc}
//                             onChange={formik.handleChange}
//                         >
//                             <MenuItem value="">
//                                 <em>Ninguno</em>
//                             </MenuItem>
//                             <MenuItem value={'RC'}>Registro Civil</MenuItem>
//                             <MenuItem value={'TI'}>Tarjeta de Identidad</MenuItem>
//                             <MenuItem value={'CC'}>Cedula de Ciudadania</MenuItem>
//                             <MenuItem value={'CE'}>Cedula de Extangeria</MenuItem>
//                         </Select>
//                     </FormControl>
//                     <TextField
//                         id="document"
//                         label='NUMERO DE DOCUMENTO'
//                         name="document"
//                         type="text"
//                         onChange={formik.handleChange}
//                         value={formik.values.document}
//                         error={errordoc}
//                     />

//                     <TextField
//                         id="phone"
//                         label='CELULAR'
//                         name="phone"
//                         type="text"
//                         onChange={formik.handleChange}
//                         value={formik.values.phone}
//                         error={errorphone}
//                     />
//                     <TextField
//                         id="date"
//                         label="FECHA Y HORA PARA LA CITA"
//                         value={formik.values.date}
//                         name={'date'}
//                         type="datetime-local"
//                         className={classes.textField}
//                         onChange={formik.handleChange}
//                         InputLabelProps={{
//                             shrink: true
//                         }}
//                     />
//                     <Button type="submit" variant="outlined" className={classes.button}  > AGENDAR </Button>
//                     
//                 </form>
//             </div>
//         </div>
//     )
// };