import './App.css';
import './componentes/recursos/fonts/fonts.css'//para importar fuente, se importa css configurado con @font-face
import {Testimonio} from './componentes/testimonio';//importar componente desde js(x). si esta entre {}, es llamado x nombre.
import {Boton} from './componentes/botonContador';
import {Contador} from './componentes/botonContador';
import {ListaTareas} from './componentes/InputLista.tsx';
import { PokeSearch } from './componentes/pokeSearch.jsx';
import { v4 as uuidv4 } from 'uuid';
import React, { useState, useRef } from 'react';
import dataME from './componentes/dataME.json';


function App() {
  const [clicksAmount,setClickAmounts] = useState(0)
  const manejoClickAceptar = ()=>{setClickAmounts(clicksAmount+1)}
  const manejoClickCancelar = ()=>{setClickAmounts(0);}
  const myRef = useRef();
  
  const[busqueda,setBusqueda] = useState('')//valores para 2 parametros
  const[numeroPagina,setnumeroPagina] = useState(1)
  function manejarBusqueda(e) {//funcion que da valor a busqueda
    setBusqueda(e.target.value)//lo que se va a buscar es lo que esta escrito en el input
    console.log(e.target.value)
    setnumeroPagina(1)}//cada vez que el input cambia, la pagina vuelve a uno para comenzar nueva busqueda

  const {pokes, hayMas, carga, error} = PokeSearch(busqueda, numeroPagina)

  return (
    <><div className="App">
      <h1>Mass Effect</h1>
      <div ref={myRef} className="contenedor-Testimonios">
        {dataME.miembro.map((testimonial) => (
          <Testimonio
            key={uuidv4()}
            nombre={testimonial.nombre}
            avatar={testimonial.avatar}
            profesion={testimonial.profesion}
            descripcion={testimonial.descripcion} />
        ))}
      </div>
      <div className='contenedor-pokeSearch'>
        <input type='text' value={busqueda} onChange={manejarBusqueda}></input> 
        {/* el value va a ser busqueda, en caso que se cambie el valor en otra parte. */}
        <div>{pokes
        .filter(poke=>poke.toLowerCase().includes(busqueda))
        .map(poke =>{
          return <div className='bloquePoke' key={uuidv4()}>{poke}</div>
          //se puede hacer un console.log para verificar los valores de "pokes". Se aplica filtro, con minusculas,
          //que incluya valor del input. Luego se mapea el resto.
        })}</div>
        <div>{carga}</div>{/* {aparecemientras no haya nada en el input} */}
        <div>{error && 'error'}</div>
      </div>
      <Contador numeroClicks={clicksAmount} />
      <div className="contenedor-Boton">
        <Boton texto="Aceptar" cual_boton={true} manejoClick={manejoClickAceptar} />
        <Boton texto="Cancelar" cual_boton={false} manejoClick={manejoClickCancelar} />
      </div>
    </div><div className='Lista-Tareas'>
        <h2>Lista de Tareas</h2>
        <ListaTareas></ListaTareas>
      </div>
      </>
  );
}

export default App;//para que se muestre en vp, debe exportarse.