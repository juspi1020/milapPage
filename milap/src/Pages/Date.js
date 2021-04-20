import React from 'react';
import PrimarySearchAppBar from '../Components/Navigator.js';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    textfield: {
        padding: '5em 2em 0em 2em',
        width: '100%',
        ['@media (min-width:960px)']: {
            width: '100%',
        }
    },
    position: {
        margin: '2em 0% 0% 0%'
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            ['@media (min-width:960px)']: {
                width: '40%',
            }
        },
    },
    formControl: {
        margin: theme.spacing(1),
        width: '100%',
        ['@media (min-width:960px)']: {
            width: '40%',
        }
    },

}));

const newDate = [];


export default function Us() {
    const classes = useStyles();


    const [nombre, setName] = React.useState('');
    const [apellidos, setLast] = React.useState('');
    const [documento, setDoc] = React.useState('');
    const [celular, setCel] = React.useState('');
    const [tipodoc, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState('');
    const handleChangeName = (event) => { setName(event.target.value) };
    const handleChangelast = (event) => { setLast(event.target.value) };
    const handleChangeDoc = (event) => { setDoc(event.target.value) };
    const handleChangeCel = (event) => { setCel(event.target.value) };
    const handleChange = (event) => { setAge(event.target.value) };
    const handleChangeDate = (event) => { setDate(event.target.value) }
    const handleClose = () => { setOpen(false); };
    const handleOpen = () => { setOpen(true); };

    return (
        <div >
            <PrimarySearchAppBar />

            <div className={classes.textfield} >
                <h3>AGENDA TU CITA</h3>
                <form className={classes.root} noValidate autoComplete="off">
                    <FormControl>
                        <TextField id={'nombre'}
                            label={'NOMBRE'}
                            value={nombre}
                            onChange={handleChangeName}
                            error={nombre === '' ? 'error' : false}
                            helperText={nombre === '' ? 'Campo requerido!' : ' '}
                        />
                    </FormControl>
                    <TextField id={'apellidos'}
                        label={'APELLIDO'}
                        value={apellidos}
                        onChange={handleChangelast}
                        error={apellidos === '' ? 'error' : false}
                        helperText={apellidos === '' ? 'Campo requerido!' : ' '}
                    />

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-controlled-open-select-label">TIPO DE DOCUMENTO</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={tipodoc}
                            onChange={handleChange}
                            error={tipodoc === '' ? 'error' : false}
                            helperText={tipodoc === '' ? 'Campo requerido!' : ' '}
                        >
                            <MenuItem value="">
                                <em>Ninguno</em>
                            </MenuItem>
                            <MenuItem value={'RC'}>Registro Civil</MenuItem>
                            <MenuItem value={'TI'}>Tarjeta de Identidad</MenuItem>
                            <MenuItem value={'CC'}>Cedula de Ciudadania</MenuItem>
                            <MenuItem value={'CE'}>Cedula de Extangeria</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField id={'documento'}
                        label={'NUMERO DE DOCUMENTO'}
                        value={documento}
                        onChange={handleChangeDoc}
                        error={documento === '' ? 'error' : false}
                        helperText={documento === '' ? 'Campo requerido!' : ' '}
                    />

                    <TextField id={'celular'}
                        label={'CELULAR'}
                        value={celular}
                        onChange={handleChangeCel}
                        error={celular === '' ? 'error' : false}
                        helperText={celular === '' ? 'Campo requerido!' : ' '}
                    />
                    <TextField
                        id="datetime"
                        label="FECHA Y HORA PARA LA CITA"
                        type="datetime-local"
                        defaultValue="2021-01-01T10:30"
                        className={classes.textField}
                        value={date}
                        onChange={handleChangeDate}
                        error={date === '' ? 'error' : false}
                        helperText={date === '' ? 'Campo requerido!' : ' '}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
                <Button id="agendar" variant="outlined" className={classes.position} onClick={newDate}>AGENDAR</Button>
            </div>

        </div>
    )
};

