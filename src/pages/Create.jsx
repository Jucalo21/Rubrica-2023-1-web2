import React from 'react'
import { useFormik, Formik, Field} from 'formik'

const Create = () => {

    const formik=useFormik(
        {
            initialValues:{
                titulo:'',descripcion:'',categoria:'',equipo:'',link:''},
                onSubmit: values=>{
                console.log(values)
            }
        }
    )

    return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label>Titulo:</label>
                <input type="text" 
                name='titulo'
                id='titulo'
                onChange={formik.handleChange}
                />
            </div>
            <div>
                <label>Descripción:</label>
                <input type="text" 
                name='descripcion'
                id='descripcion'
                onChange={formik.handleChange}
                />
            </div>
            <div>
                <label>Categoria:</label>
                <select name="categoria" id="descripcion" onChange={formik.handleChange}>
                    <option value="Todos">Seleccionar deporte</option>
                    <option value="Equipo">Deporte de equipo</option>
                    <option value="Mesa">Deporte de mesa</option>
                    <option value="Motor">Deporte de motor</option>
                </select>
            </div>
            <div>
                <label>Equipo:</label>
                <input type="text" 
                name='equipo'
                id='equipo'
                onChange={formik.handleChange}
                />
            </div>
            <div>
                <label>Link:</label>
                <input type="text" 
                name='link'
                id='link'
                onChange={formik.handleChange}
                />
            </div>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
)
}

export default Create