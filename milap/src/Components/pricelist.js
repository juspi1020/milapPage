import React from 'react';
import prices from '../prices.js';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function BasicTable() {

    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"> Producto</TableCell>
              <TableCell align="center">Anti Reflejo</TableCell>
              <TableCell align="center">Fotocromatico</TableCell>
              <TableCell align="center">Monofocal</TableCell>
              <TableCell align="center"> Bifocal</TableCell>             
              <TableCell align="center">Progresivo</TableCell>
              <TableCell align="center"> Laboratorio</TableCell>      
              <TableCell align="center">Precio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prices.map((row) => (
              <TableRow key={row.nombre}>
                <TableCell component="th" scope="row">
                  {row.nombre}
                </TableCell>
                <TableCell align="center"><CheckIcon style={{ display: row.ar }} /></TableCell>
                <TableCell align="center"><CheckIcon style={{ display: row.fotocromatico }} /></TableCell>
                <TableCell align="center"><CheckIcon style={{ display: row.monofocal }} /></TableCell>
                <TableCell align="center"><CheckIcon style={{ display: row.bifocal }} /></TableCell>
                <TableCell align="center"><CheckIcon style={{ display: row.progresivo }} /></TableCell>
                <TableCell align="center">{row.laboratorio}</TableCell>
                <TableCell align="center">{row.precio}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}