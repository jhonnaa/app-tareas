import React, { useState } from 'react'
import '../css/tareaFormulario.css'
import { v4 as uuidv4 } from 'uuid'
const TareaFormulario = (props) => {

    const[input, setImput] = useState('')

    const manejarCambio = e =>{
        setImput(e.target.value)
    }

    const manejarEnvio = e =>{
        e.preventDefault();
        const tareaNueva ={
            id: uuidv4(),
            texto:input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    }


  return (
    <div>
        <form 
        action="" className='tarea-form'
        onSubmit={manejarEnvio}>
            <input 
            type="text"
            className='tarea-input'
            placeholder='Escribe una tarea'
            name='texto'
            onChange={manejarCambio}
            />
            <button className='tarea-boton'>
                Agregar Tarea
            </button>

        </form>

    </div>
  )
}

export default TareaFormulario