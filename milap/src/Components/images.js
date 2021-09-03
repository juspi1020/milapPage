import React from 'react';

import circular from '../Images/ovalado.svg';
import cuadrado from '../Images/rectangular.svg';
import triangular from '../Images/triangular.svg';
import miopia from '../Images/miopia.svg';
import astigmatismo from '../Images/astigmatismo.svg';
import hipermetropia from '../Images/hipermetropia.svg';
import presbicia from '../Images/presbicia.svg';
import pasta from '../Images/pasta.svg';
import metalica from '../Images/metalica.svg';
import acetato from '../Images/acetato.svg';
import monofocal from '../Images/monofocal.svg';
import bifocal from '../Images/bifocal.svg';
import progresivo from '../Images/progresivo.svg';
const style={
    width:'8em',
}


const Images  = (props) => {
    const tipo  = props.tipo;
    //console.log(tipo);
    return (
        <div>
          {(() => {
                switch (tipo) {
                    case "Ovalado": return <img id="o-images" src={circular} alt={tipo} style={style}/>;
                    case "Rectangular": return <img id="o-images" src={cuadrado} alt={tipo} style={style}/>;
                    case "Triangular": return <img id="o-images" src={triangular} alt={tipo} style={style} />;
                    case "Miopia": return <img id="o-images" src={miopia} alt={tipo} style={style} />;
                    case "Astigmatismo": return <img id="o-images" src={astigmatismo} alt={tipo} style={style} />;
                    case "Hipermetropia": return <img id="o-images" src={hipermetropia} alt={tipo} style={style} />;
                    case "Presbicia": return <img id="o-images" src={presbicia} alt={tipo} style={style} />;
                    case "Pasta": return <img id="o-images" src={pasta} alt={tipo} style={style} />;
                    case "Metalica": return <img id="o-images" src={metalica} alt={tipo} style={style} />;
                    case "Acetato": return <img id="o-images" src={acetato} alt={tipo} style={style} />;
                    case "Monofocal": return <img id="o-images" src={monofocal} alt={tipo} style={style} />;
                    case "Bifocal": return <img id="o-images" src={bifocal} alt={tipo} style={style} />;
                    case "Progresivo": return <img id="o-images" src={progresivo} alt={tipo} style={style} />;

                    default: return <div/>;
                }
            })()}
        </div>
    );
};
export default Images;