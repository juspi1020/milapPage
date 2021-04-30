import React from 'react';
import Listas from '../list.js'
import PrimarySearchAppBar from '../Components/Navigator.js';
import Button from '@material-ui/core/Button';

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     oText: {
//         color: 'black',
//         position: 'relative',
//         fontSize: '1em',
//         padding: '0% 0% 0% 0%',
//         ['@media (min-width:960px)']: {
//             fontSize: '5em',
//             padding: '25% 0% 0% 40%',
//         }
//     },
// }));


const style = {
    margin: '5em 2em 0em 2em',
    display: 'flex',
}

function setBrand() {

}
export default function Us() {
    //const classes = useStyles();

    return (
        <div style={style}>
            <PrimarySearchAppBar />
            <div>
                <h3>Marcas de Monturas</h3>
                {Listas.map((montura) => (
                    <Button ><img src={montura.img} alt={montura.img} onClick={setBrand} /></Button>
                ))}
                <table>
                    <tr>
                        {Listas.map((montura) => {
                            montura.modelos.map((marcos) => {
                                console.log(marcos.referencia)
                                // <>
                                //     <td>{marcos.referencia}</td>
                                //     <td></td>
                                // </>
                            })
                        })}
                    </tr>
                </table>
            </div>
        </div>
    )
};
