import React from 'react'
import '../css/tarea.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'
export const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea  }) => {
  
  return (
    <div className={completada ? 'cont-tarea completada' : 'cont-tarea'}>
        <div className='texto-tarea'
             onClick={()=> completarTarea(id)}>
            {texto}
            
        </div>
        <div className='cont-icono-tarea'
        onClick={()=> eliminarTarea(id)}>
               <AiOutlineCloseCircle
               className='icono-tarea'/>
        </div>

    </div>
  )
}
