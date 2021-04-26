import React from 'react';
import circular from '../Images/circular.svg';
import cuadrado from '../Images/cuadrado.svg';
import triangular from '../Images/triangular.svg';
import miopia from '../Images/miopia.svg';
import astigmatismo from '../Images/astigmatismo.svg';
import hipermetropia from '../Images/hipermetropia.svg';
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
                    case "circular": return <img id="o-images" src={circular} alt={tipo} style={style}/>;
                    case "cuadrado": return <img id="o-images" src={cuadrado} alt={tipo} style={style}/>;
                    case "triangular": return <img id="o-images" src={triangular} alt={tipo} style={style} />;
                    case "miopia": return <img id="o-images" src={miopia} alt={tipo} style={style} />;
                    case "astigmatismo": return <img id="o-images" src={astigmatismo} alt={tipo} style={style} />;
                    case "hipermetropia": return <img id="o-images" src={hipermetropia} alt={tipo} style={style} />;
                    case "pasta": return <img id="o-images" src={pasta} alt={tipo} style={style} />;
                    case "metalica": return <img id="o-images" src={metalica} alt={tipo} style={style} />;
                    case "acetato": return <img id="o-images" src={acetato} alt={tipo} style={style} />;
                    case "monofocal": return <img id="o-images" src={monofocal} alt={tipo} style={style} />;
                    case "bifocal": return <img id="o-images" src={bifocal} alt={tipo} style={style} />;
                    case "progresivo": return <img id="o-images" src={progresivo} alt={tipo} style={style} />;

                    default: return <div/>;
                }
            })()}
        </div>
    );
};
export default Images;