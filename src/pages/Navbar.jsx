import React from 'react'

const Navbar = ({setContent, setCreate}) => {
    const modoContent=()=>{
        setContent(true)
        setCreate(false)
    }

    const modoCreate=()=>{
        setContent(false)
        setCreate(true)
    }
return (
    <div className='navbar'>
        <button onClick={modoContent}>Content</button>
        <button onClick={modoCreate}>Create</button>
    </div>
)
}

export default Navbar