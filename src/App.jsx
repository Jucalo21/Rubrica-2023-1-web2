import { useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import Content from './pages/Content'
import Create from "./pages/Create";

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
    </div>
  )
}

export default App
