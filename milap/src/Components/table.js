import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import rows from '../prices.js';

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 10,
    },
    {
        field: 'nombre',
        headerName: 'Producto',
        width: 300,
    },
    {
        field: 'ar',
        headerName: 'Anti Reflejo',
        width: 150,
    },
    {
        field: 'fotocromatico',
        headerName: 'Fotocromatico',
        width: 170,
    },
    {
        field: 'monofocal',
        headerName: 'Monofocal',
        width: 150,
    },
    {
        field: 'bifocal',
        headerName: 'Bifocal',
        width: 130,
    },
    {
        field: 'progresivo',
        headerName: 'Progresivo',
        width: 150,
    },
    {
        type:'number',
        field: 'precio',
        headerName: 'Precio',
        width: 120,
    }
];



export default function DataTable() {
    return (
        <div style={{ height: '36em', width: '100%', margin:'4.2em 0em 0em 0em'}}>
          
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={20}
                disableSelectionOnClick
            />
        </div>
    );
}
