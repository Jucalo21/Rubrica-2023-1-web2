import React from 'react'
import "./Cards.css";

const Cards = (props) => {
    //Plantilla para crear las cards
return (
    <div className='card-list'>
        <div className="card">
        <h2>{props.titulo}</h2>
        <img src={props.imagen} alt={props.titulo}/>
        <h4>Categoria: {props.categoria}</h4>
        <p>Juego entre dos equipos de once jugadores cada uno, cuyo objetivo es hacer entrar en 
        la portería contraria un balón que no puede ser tocado con las manos ni con los brazos
        , salvo por el portero en su área de meta.</p>
        <a href={props.link}>{props.equipo}</a>
        </div>
    </div>
)
}

export default Cards