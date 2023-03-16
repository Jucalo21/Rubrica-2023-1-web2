import React from 'react'
import { useFormik, Formik} from 'formik'

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
                onChange={Formik.handleChange}
                />
            </div>
            <div>
                <label>Descripción:</label>
                <select name="descripcion" id="descripcion" onChange={Formik.handleChange}>
                    <option value="Equipo"></option>
                    <option value="Mesa"></option>
                    <option value="Motor"></option>
                </select>
            </div>
            <div>
                <label>Categoria:</label>
                <input type="text" 
                name='categoria'
                id='categoria'
                onChange={Formik.handleChange}
                />
            </div>
            <div>
                <label>Equipo:</label>
                <input type="text" 
                name='equipo'
                id='equipo'
                onChange={Formik.handleChange}
                />
            </div>
            <div>
                <label>Link:</label>
                <input type="text" 
                name='link'
                id='link'
                onChange={Formik.handleChange}
                />
            </div>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
)
}

export default Create