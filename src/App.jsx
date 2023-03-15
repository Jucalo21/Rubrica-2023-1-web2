import { useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import Content from './pages/Content'
import Create from "./pages/Create";

function App() {
  const [content, setContent] = useState(false)
  const [create, setCreate] = useState(true)

  return (
    <div className="container">
      <header>
        <Navbar setContent={setContent} setCreate={setCreate}/>
      </header>
      {
        create ? <Create/> : <Content/>
      }
    </div>
  )
}

export default App
