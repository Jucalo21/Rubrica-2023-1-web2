import { useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import Content from './pages/Content'
import Create from "./pages/Create"
import './pages/components/Cards.css'

function App() {
  const [content, setContent] = useState(true)
  const [create, setCreate] = useState(false)

  return (
    <div className="container">
      <header>
        <Navbar setContent={setContent} setCreate={setCreate}/>
      </header>
      {
        content ? <Content/> : <Create/>
      }
      <footer>
  <div>
    <h3>Sobre el desarrollador</h3>
    <p>Nombre: Juan Camilo López</p>
    <p>Correo electrónico: jucalo2195@gmail.com</p>
  </div>
  <div>
    <h3>Objetivo de la aplicación</h3>
    <p>Esta aplicación tiene como objetivo servir de rubrica para
      evaluar los contenidos que hemos estado dando este semestre
      en desarrollo web 2
    </p>
  </div>
  <div>
    <h3>Redes sociales</h3>
    <ul>
      <a href="https://www.facebook.com/juancamilo.lopez.35175/">
        <img className='icono' src="https://png.pngtree.com/png-clipart/20180515/ourmid/pngtree-facebook-icon-png-image_3566125.png" alt="Icono facebook" />
        </a>
      <a href="https://twitter.com/Jukalo21">
        <img className='icono' src="https://about.fb.com/es/wp-content/uploads/sites/13/2019/10/new-ig-icon-1.png" alt="Twitter" />
        </a>
      <a href="https://www.instagram.com/jucalo219/">
        <img className='icono' src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/twitter_logo_blue.png.twimg.768.png" alt="Instagram" />
        </a>
    </ul>
  </div>
</footer>
    </div>
  )
}

export default App
