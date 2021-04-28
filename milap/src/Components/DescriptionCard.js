import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const style = {
    width: '15em',
}

const DescriptionCard = (props) => {
    const tipo = props.tipo;
    return (
        <div>
            {(() => {
                switch (tipo) {
                    case "rectangular":
                        return (
                            <CardContent style={style}>
                                <Typography>
                                    En esta clase de rostro los bordes laterales son rectos y muy angulosos, sobre todo en las esquinas de la frente y la mandíbula.
                                </Typography>
                            </CardContent>
                        )

                    case "triangular": return (
                        <CardContent style={style}>
                            <Typography>
                                Este rostro presenta una barbilla muy puntiaguda, la distancia entre los pómulos es más grande y la frente sobresaliente.
                        </Typography>
                        </CardContent>
                    )
                    case "ovalado": return (
                        <CardContent style={style}>
                            <Typography>
                                Su principal característica es estar más alto que ancho pero de manera proporcionada, por esta razón, se le conoce como el rostro de proporción perfecta o ideal.
                            </Typography>
                        </CardContent>
                    )
                    case "miopia": return (
                        <CardContent style={style}>
                            <Typography>
                                El principal síntoma de la miopía es que el paciente ve claramente los objetos cercanos, pero percibe de forma borrosa y le cuesta enfocar los objetos que se encuentran a una cierta distancia.
                        </Typography>
                        </CardContent>
                    )
                    case "hipermetropia": return (
                        <CardContent style={style}>
                            <Typography>
                                La hipermetropía es un defecto ocular que provoca la falta de nitidez o visión borrosa de los objetos próximos como consecuencia de enfocar las imágenes por detrás de la retina y no directamente sobre ella.
                        </Typography>
                        </CardContent>
                    )
                    case "astigmatismo": return (
                        <CardContent style={style}>
                            <Typography>
                                Es una imperfección frecuente y generalmente tratable en la curvatura del ojo que provoca visión lejana y cercana borrosas.                        </Typography>
                        </CardContent>
                    )
                    case "presbicia": return (
                        <CardContent style={style}>
                            <Typography>
                                La presbicia es la pérdida gradual de la capacidad de los ojos para enfocar objetos cercanos. Es una parte natural y a veces molesta del envejecimiento. Por lo general, la presbicia empieza a notarse entre los 40 y 45 años y continúa empeorando hasta alrededor de los 65 años.
                        </Typography>
                        </CardContent>
                    )
                    case "pasta": return (
                        <CardContent style={style}>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                        </CardContent>
                    )
                    case "metalica": return (
                        <CardContent style={style}>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                        </CardContent>
                    )
                    case "acetato": return (
                        <CardContent style={style}>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                        </CardContent>
                    )
                    case "monofocal": return (
                        <CardContent style={style}>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                        </CardContent>
                    )
                    case "bifocal": return (
                        <CardContent style={style}>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                        </CardContent>
                    )
                    case "progresivo": return (
                        <CardContent style={style}>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography >
                        </CardContent>
                    )
                    default: return <div />
                }
            })()}
        </div>
    );
};
export default DescriptionCard;