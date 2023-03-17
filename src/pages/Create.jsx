import React, { useContext} from 'react'
import { useFormik} from 'formik'
import * as Yup from 'yup'
import { Contexto } from './Contexto/Contexto'

const Create = () => {
    const {lista,setLista} = useContext(Contexto)
    const imagen="https://upload.wikimedia.org/wikipedia/commons/c/c6/Tablero_de_ScrabbleIMG_20201008_175354.jpg"

    const formik=useFormik(
        {
            /*Creacion de un esquema, ademas 
            de recibir los valores de las casillas del formulario*/
            initialValues:{
                titulo:'',descripcion:'',categoria:'',equipo:'',link:''},
                validationSchema: Yup.object({
                    //Creacion de las validaciones para cada casilla
                    titulo:Yup.string().required('Ingrese el titulo del deporte')
                    .max(20,'Maximo 20 caracteres')
                    .min(3,'Minimo 3 caracteres'),
                    descripcion:Yup.string().required('Ingrese la descripcion del deporte')
                    .max(200,'Maximo 200 caracteres')
                    .min(50,'Minimo 50 caracteres'),
                    categoria:Yup.string().required('Elija la categoria del deporte')
                    .oneOf(["Equipo","Mesa","Motor"],"Selecciona una de las opciones"),
                    equipo:Yup.string().required('Ingrese el equipo')
                    .max(20,'Maximo 15 caracteres')
                    .min(3,'Minimo 3 caracteres'),
                    link:Yup.string().required('Ingrese el link a la pagina del equipo')
                    .max(20,'Maximo 50 caracteres')
                    .min(3,'Minimo 10 caracteres')
                }),
                onSubmit: values=>{
                console.log(values)
                setLista([
                    ...lista,values
                ])
                console.log(lista);

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
                value={formik.values.titulo}
                onBlur={formik.handleBlur}
                />
                {
                    //Validacion para mostrar los errores si se toca la casilla
                formik.touched.titulo && formik.errors.titulo ?
                <div>{formik.errors.titulo}</div>:null
                }
            </div>
            <div>
                <label>Descripción:</label>
                <input type="text" 
                name='descripcion'
                id='descripcion'
                onChange={formik.handleChange}
                value={formik.values.descripcion}
                onBlur={formik.handleBlur}
                />
                {
                    //Validacion para mostrar los errores si se toca la casilla
                formik.touched.descripcion && formik.errors.descripcion ?
                <div>{formik.errors.descripcion}</div>:null
                }
            </div>
            <div>
                <label>Categoria:</label>
                <select name="categoria" id="descripcion" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                >
                    <option value="Todos">Seleccionar deporte</option>
                    <option value="Equipo">Deporte de equipo</option>
                    <option value="Mesa">Deporte de mesa</option>
                    <option value="Motor">Deporte de motor</option>
                </select>
                {
                    /*Validacion para mostrar los errores si 
                    no se selecciona una categoria del select*/
                formik.touched.categoria && formik.errors.categoria ?
                <div>{formik.errors.categoria}</div>:null
                }
            </div>
            <div>
                <label>Equipo:</label>
                <input type="text" 
                name='equipo'
                id='equipo'
                onChange={formik.handleChange}
                value={formik.values.equipo}
                onBlur={formik.handleBlur}
                />
                {
                    //Validacion para mostrar los errores si se toca la casilla
                formik.touched.equipo && formik.errors.equipo ?
                <div>{formik.errors.equipo}</div>:null
                }
            </div>
            <div>
                <label>Link:</label>
                <input type="text" 
                name='link'
                id='link'
                onChange={formik.handleChange}
                value={formik.values.link}
                onBlur={formik.handleBlur}
                />
                {
                    //Validacion para mostrar los errores si se toca la casilla
                formik.touched.link && formik.errors.link ?
                <div>{formik.errors.link}</div>:null
                }
            </div>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
)
}

export default Create