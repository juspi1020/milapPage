import React from 'react';
import Listas from '../list.js'
import PrimarySearchAppBar from '../Components/Navigator.js';
import Button from '@material-ui/core/Button';

const style = {
    margin: '5em 2em 0em 2em',
    display: 'flex',
}

function setBrand() {
    return (
        <div>
            {
                Listas.map((montura) => {
                    montura.modelos.map((marcos) => {
                        console.log(marcos.img)
                        return (
                            <table>
                                <tr>
                                    <img src={marcos.img} alt={marcos.img} />
                                </tr>
                            </table>
                        )
                    })
                })
            }
        </div>
    )
}


export default function Us() {

    return (
        <div style={style}>
            <PrimarySearchAppBar />
            <div>
                <h3>Marcas de Monturas</h3>
                {Listas.map((montura) => (
                    <Button ><img src={montura.img} alt={montura.img} onClick={setBrand} /></Button>
                ))}
            </div>
        </div>
    )
};
