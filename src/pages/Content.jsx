import React from 'react'
import Cards from './components/Cards'

const datos = [
    {
    titulo: "Futbol",
    imagen: "https://thepfsa.co.uk/wp-content/uploads/2022/06/Playing-Football.jpg",
    /* texto: "", */
    categoria: "Equipo"/* ,
    equipo: "" */
    },
];

const Content = () => {
return (
    <div>Content

{
datos.map((equipo,index)=>(
        <Cards
        key={index}
        titulo={equipo.titulo}
        imagen={equipo.imagen}
        categoria={equipo.categoria}
        />
    ))
    }
    </div>
)
}

export default Content