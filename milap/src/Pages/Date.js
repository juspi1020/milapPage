import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Date = () => {
    const frmContact = { userEmail: '', concernCategory: '', emailTitle: '', emailDetails: '' };
    const [contact, setContact] = useState(frmContact);
    const [showMessage, setShowMessage] = useState(false);
    const handleChange = e => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        emailjs.send('default_service', 'template_61mxqpm', contact, 'user_1y3e7SWa6ujxgkJcPkxkH')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setContact(frmContact);
                setShowMessage(true);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }
    return (
        <div className='container pt-2 text-center'>
            <div className="alert alert-light" role="alert">
                <a href="https://tupaginaonline.net/tutorial-para-enviar-correo-con-react-js-hooks-y-emailjs">Tutorial para enviar correo con React.js (Hooks) y emailJS</a>
            </div>

            {showMessage ? <div className="alert alert-success col-md-5 mx-auto" role="alert">Email Send Success!!</div> : ``}

            <form onSubmit={handleSubmit}>
                <div className="pt-3"><h3 className="font-weight-bold"> Contact Us !! </h3></div>
                <div className="pt-3 col-md-5 mx-auto">
                    <div className="form-group text-left"> <b>Your Email</b> <br />
                        <input required type="text" value={contact.userEmail} name="userEmail" onChange={handleChange} className="form-control" placeholder="Your email" />
                    </div>
                </div>
                <div className="pt-3 col-md-5 mx-auto">
                    <div className="form-group text-left"> <b>Concern Category</b> <br />
                        <select required className="form-control" value={contact.concernCategory} onChange={handleChange} name="concernCategory">
                            <option value='' >Select</option>
                            <option value="info" >Info</option>
                            <option value="buy">Buy</option>
                            <option value="play tennis">Play tennis</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="pt-3 col-md-5 mx-auto">
                    <div className="form-group text-left"> <b>Title</b> <br />
                        <input value={contact.emailTitle} required type="text" name="emailTitle" onChange={handleChange} className="form-control" placeholder="Your email" />
                    </div>
                </div>
                <div className="pt-3 col-md-5 mx-auto">
                    <div className="form-group text-left"> <b>Describe your concerns</b> <br />
                        <textarea required name="emailDetails" onChange={handleChange} className="form-control" placeholder="Describe your concerns" value={contact.emailDetails}></textarea>
                    </div>
                </div>
                <div className="pt-3 col-md-5 mx-auto text-left">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
            <div className="pt-5 font-weight-bold">tupaginaonline.net</div>
        </div>
    );
}
export default Date;


// import React from 'react';
// import PrimarySearchAppBar from '../Components/Navigator.js';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';
// import { useFormik } from 'formik';
// import MenuItem from '@material-ui/core/MenuItem';
// import Snackbar from '@material-ui/core/Snackbar';



// // User ID
// // user_1y3e7SWa6ujxgkJcPkxkH
// // Access Token
// // c24d3261e1811ba760d9bc0414b0d530
// const useStyles = makeStyles((theme) => ({

//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//             width: '100%',
//             display: 'flex',
//             flexDirection: 'column',
//             ['@media (min-width:960px)']: {
//                 width: '40%',
//             }
//         },
//     },
//     formControl: {
//         margin: theme.spacing(1),
//         width: '100%',
//         ['@media (min-width:960px)']: {
//             width: '40%',
//         }
//     },
//     textfield: {
//         padding: '5em 2em 0em 2em',
//         width: '100%',
//         ['@media (min-width:960px)']: {
//             width: '100%',
//         }
//     },
//     button: {
//         position: 'absolute',
//         margin: '2em 0em 0em 0em',
//         maxWidth: '7em',
//     },

// }));

// export default function Us() {
//     const classes = useStyles();
//     const formik = useFormik({
//         initialValues: {
//             firstName: '',
//             lastName: '',
//             doc: '',
//             document: '',
//             phone: '',
//             date: '',
//         },
//         onSubmit: values => {
//             //alert(JSON.stringify(values, null, 2));
//         },

//     });
//     const [state, setState] = React.useState({
//         open: false,
//         errordoc: '',
//         errorphone: '',
//         vertical: 'top',
//         horizontal: 'center',
//         message: 'Cita Agendada',
//     });

//     const { vertical, horizontal, open, message, errordoc, errorphone } = state;

//     const validate = (newState) => () => {
//         if (!formik.values.firstName
//             || !formik.values.lastName
//             || !formik.values.doc
//             || !formik.values.document
//             || !formik.values.phone
//             || !formik.values.date) {
//             setState({ open: true, message: 'Faltan campos por llenar', ...newState });
//         } else if (!/^[0-9]{4,12}$/i.test(formik.values.document)) {
//             setState({ open: true, message: 'Este campo solo acepta números', errordoc: true, ...newState });
//         } else {
//             if (!/^[0-9]{7,11}$/i.test(formik.values.phone)) {
//                 setState({ open: true, message: 'Este campo solo acepta números', errorphone: true, ...newState });
//             } else {
//                 setState({ open: true, message: 'Cita Agendada', ...newState });
//             }
//         }
//     };

//     const handleClose = () => {
//         setState({ ...state, open: false });
//     };


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
//                     <Button type="submit" variant="outlined" className={classes.button} onClick={validate({ vertical: 'bottom', horizontal: 'left' })} > AGENDAR </Button>
//                     <Snackbar
//                         anchorOrigin={{ vertical, horizontal }}
//                         open={open}
//                         onClose={handleClose}
//                         message={message}
//                         key={vertical + horizontal}
//                     />
//                 </form>
//             </div>
//         </div>
//     )
// };