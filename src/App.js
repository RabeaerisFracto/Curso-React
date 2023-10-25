import './App.css';
import './componentes/recursos/fonts/fonts.css'//para importar fuente, se importa css configurado con @font-face
import {Testimonio} from './componentes/testimonio';//importar componente desde js(x). si esta entre {}, es llamado x nombre.
import {Boton} from './componentes/botonContador';
import {Contador} from './componentes/botonContador';
import {ListaTareas} from './componentes/InputLista.tsx';
import React, { useState, useRef } from 'react';
import dataME from './componentes/dataME.json';


function App() {
  const [clicksAmount,setClickAmounts] = useState(0)
  const manejoClickAceptar = ()=>{setClickAmounts(clicksAmount+1)}
  const manejoClickCancelar = ()=>{setClickAmounts(0);}
  const myRef = useRef();
  
  return (
    <><div className="App">
      <h1>Mass Effect</h1>
      <div ref={myRef} className="contenedor-Testimonios">
        {dataME.miembro.map((testimonial) => (
          <Testimonio
            nombre={testimonial.nombre}
            avatar={testimonial.avatar}
            profesion={testimonial.profesion}
            descripcion={testimonial.descripcion} />
        ))}
      </div>
      <Contador numeroClicks={clicksAmount} />
      <div className="contenedor-Boton">
        <Boton texto="Aceptar" cual_boton={true} manejoClick={manejoClickAceptar} />
        <Boton texto="Cancelar" cual_boton={false} manejoClick={manejoClickCancelar} />
      </div>
    </div><div className='Lista-Tareas'>
        <h2>Lista de Tareas</h2>
        <ListaTareas></ListaTareas>
      </div></>
  );
}

export default App;//para que se muestre en vp, debe exportarse.