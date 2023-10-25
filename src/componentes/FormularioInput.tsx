import React, {useState} from "react";
import '../stylesheets/InputLista.css';
import { v4 as uuidv4 } from 'uuid';

export function FormularioInput (props) {
    const [input, setInput] = useState('');
    const manejarCambio = e =>{
        setInput(e.target.value)
    }
    const manejarEnvio = e =>{
        e.preventDefault()
        console.log('enviando formulario')
        const nuevaTarea = {
            id:uuidv4(),
            texto:input,
            completado: false
        }
        props.onSubmit(nuevaTarea)
    } 
    return(
        <form className="contenedor-Tareas-Input"
        onSubmit={manejarEnvio}>
        <input
            placeholder="ingrese Tarea"
            className="text-Input"
            name="inputTarea"
            type="text"
            onChange={manejarCambio} />
        <button className="boton-Input">Ingresar</button>
        </form>
    )
}

export default FormularioInput

//manejarCambio, con onChange en el input, me permite ver cada vez que el value del input cambia.
//una vez el input.value esta actualizado, se le otorga como valor de nuevaTarea.texto
//a este objeto, se le añade un id y un boolean x defecto (false), ya que la tarea al ingresar, se presume como no completada.
//no olvidar el e.preventDefault() para que no se actualice la pagina al hacer submit.
//Esta funcion esta asociada a un OnSubmit en el return(<form>).
// AHORA se toman los valores del objeto nuevaTarea y se asigna como propiedad 'props', mediante el metodo .onSubmit()
//!!ahora cada vez que se haga submit, manejarCambio detecta el valor, manejarEnvio lo transforma en objeto, onSubmit lo para como argumento props.