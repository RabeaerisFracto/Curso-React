import React, {useState} from "react";
import '../stylesheets/InputLista.css'
import { FormularioInput } from './FormularioInput.tsx'
import { Tareas } from './Tareas.tsx'

export function ListaTareas () {
    interface Tarea {//interfaz para asignar types a propiedades de Tarea
        texto: string;
        completada: boolean;
        id: string;
    }      
const [tareas, setTareas] = useState<Tarea[]>([])//se parte con array vacio
const agregarTarea = tarea => {
    if (tarea.texto.trim()){//trim para que no hayan espacios vacios al comienzo o final
    //tb se verifica si la cadena no este vacia
    tarea.texto = tarea.texto.trim();
    const tareasActualizadas = [tarea, ...tareas];//la tarea se pasa a un array
    //queda en 1era posicion, y despues el resto de las tareas del array(...tareas)
    setTareas(tareasActualizadas);//ahora se remplaza array vacio(o anterior) x este ultimo array.
    }
    console.log(tarea)
    console.log("tarea agregada")
}
const eliminarTarea = id =>{
    const tareasActualizadas = tareas.filter(tarea=>tarea.id !==id);
    setTareas(tareasActualizadas)
}
const completarTarea = id =>{
    const tareasActualizadas = tareas.map(tarea=>{
        if(tarea.id === id){
            tarea.completada = !tarea.completada
        } return tarea;
    })
    setTareas(tareasActualizadas)
}
    return(
        <div className="contenedor-general">
            <FormularioInput onSubmit={agregarTarea} />
        <div className="contenedor-Nuevas-Tareas">
            {
                tareas.map((tarea)=>
                <Tareas
                        texto={tarea.texto}
                        completada={tarea.completada}
                        id={tarea.id}//necesario incluir key e id. key no se puede acceder como prop
                        key={tarea.id}
                        completarTarea={completarTarea}
                        eliminarTarea={eliminarTarea}
                        />)
            }
        </div>
</div>)}
export default ListaTareas;