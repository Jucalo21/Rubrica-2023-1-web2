import React from 'react'
import Cards from './components/Cards'
import { useState } from 'react';

const Content = () => {
    const [ArrayFiltrado, setArrayFiltrado] = useState([])
    const [filtrado, setFiltrado] = useState(false)

    const datos = [
        {
            titulo: "Futbol",
            imagen: "https://thepfsa.co.uk/wp-content/uploads/2022/06/Playing-Football.jpg",
            categoria: "Equipo"
        },
        {
            titulo: "Baloncesto",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Kent_Benson_attempts_a_hook_shot_over_Ken_Ferdinand.jpg",
            categoria: "Equipo" 
        },
        {
            titulo: "Formula 1",
            imagen: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/03/15/16788786361444.jpg",
            categoria: "Motor" 
        },
        {
            titulo: "Motocross",
            imagen: "https://images.unsplash.com/photo-1585210256590-fc52fd1e8348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW90b2Nyb3NzfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            categoria: "Motor" 
        },
        {
            titulo: "Volleyball",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBxoAtnHD-FcFVVDDcvjGXEzaMyzE9XoqDz8p82UwpvSVuFFENOVzZ09X9Vs17DsnBDVc&usqp=CAU",
            categoria: "Equipo" 
        },
        {
            titulo: "Karting",
            imagen: "https://storage.lacapitalmdp.com/2022/07/kart2.jpg",
            categoria: "Motor" 
        },
        {
            titulo: "Ajedrez",
            imagen: "https://images.ecestaticos.com/1k0zhBDYHNndwF-S5-V1KzeFD4E=/2x75:1720x1041/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd8d%2Fb67%2Fb66%2Fd8db67b66d090764465afa568c239335.jpg",
            categoria: "Mesa" 
        },
        {
            titulo: "Scrabble",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Tablero_de_ScrabbleIMG_20201008_175354.jpg",
            categoria: "Mesa" 
        },
        {
            titulo: "Juegos De Cartas",
            imagen: "https://www.888poker.es/blog/sites/newblog.888poker.es/files/inline-images/juegos-cartas-poker-chino.jpg",
            categoria: "Mesa" 
        }
    ]

    //Funcion para seleccionar la categoria de los deportes
    const SeleccionarCategoria=(e)=>{
    const seleccionar=e.target.value;
    
    //Funcion para filtrar los deportes
    if (seleccionar!=='Todos') {
        setFiltrado(true)
        const ListaFiltrada=datos.filter((elemento)=>elemento.categoria===seleccionar)
        setArrayFiltrado(ListaFiltrada)
        return
    }
    setFiltrado(false)
}

return (
    <div>
        <div className="filtro" onChange={SeleccionarCategoria}>
        <select name="categoria">
        <option value="Todos">Seleccionar deporte</option>
        <option value="Equipo">Deportes de equipo</option>
        <option value="Mesa">Deportes de mesa</option>
        <option value="Motor">Deportes de motor</option>   
        </select>
    </div>
{
    //Map del filtrado de los deportes
    filtrado?(
    ArrayFiltrado.map((equipo,index)=>(
        <Cards
        key={index}
        titulo={equipo.titulo}
        imagen={equipo.imagen}
        categoria={equipo.categoria}
        />
    ))
    ):
    //Map con todos los datos
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