import React from "react";
import { GiCancel } from "react-icons/gi";
import '../stylesheets/InputLista.css'

export function Tareas({texto, completada, id, completarTarea, eliminarTarea}){
    return(
        <div className={completada ? "contenedor-Tarea completada" : "contenedor-Tarea"}
        onClick={()=> completarTarea(id)}
        >{texto}<GiCancel className="boton-X" onClick={()=> eliminarTarea(id)}/></div>
    )
}

export default Tareas

//linea 2: icono se traspasa como elemento de recat, asike va entre <>.
//Se le pueden asignar propiedades de manera normal.
//RECORDAR: onClick, debe ir como funcion anonima ()=>, y a la funcion se le otorga valor para
//que identifique entre todos los valores del array