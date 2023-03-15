import React from 'react'
import "./Cards.css";

const Cards = (props) => {
return (
    <div className='card'>
        <h className='titulo'>{props.titulo}</h>
        <img src={props.imagen} alt={props.titulo}/>
        <h>Categoria: {props.categoria}</h>
        <p>Juego entre dos equipos de once jugadores cada uno, cuyo objetivo es hacer entrar en 
        la portería contraria un balón que no puede ser tocado con las manos ni con los brazos
        , salvo por el portero en su área de meta.</p>
        <a href="https://app.juniorfc.co/">equipo</a>
    </div>
)
}

export default Cards