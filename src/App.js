import './App.css';
import './componentes/recursos/fonts/fonts.css'//para importar fuente, se importa css configurado con @font-face
import dataME from './componentes/dataME.json';//importar json para evitar cambiar app
import {Testimonio} from './componentes/testimonio';//importar componente desde js(x). si esta entre {}, es llamado x nombre.
import {Boton} from './componentes/botonContador';
import {Contador} from './componentes/botonContador';


import React, { useState, useEffect, useRef } from 'react';



function App() {
  const [clicksAmount,setClickAmounts] = useState(0)
  const manejoClickAceptar = ()=>{setClickAmounts(clicksAmount+1)}
  const manejoClickCancelar = ()=>{setClickAmounts(0);}

  const [ToShow, setToShow] = useState(2); // Cantidad inicial de testimonios
  const contenedorRef = useRef(null);


  useEffect(() => {
    const contenedorRefCurrent = contenedorRef.current;
    const options = {
      root: null,
      rootMargin: '30px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {// Si el contenedor inIntersecting, carga más elementos
          setToShow((prev)=> prev+= 1); // carga 1 adicional x useState()
        }})}, options);

    if (contenedorRefCurrent){
      observer.observe(contenedorRefCurrent)
    };//observacion del elemento del DOM

    return () => {if (contenedorRefCurrent) {
      observer.unobserve(contenedorRefCurrent)}
    };//Se deja de obserrvar inmediatamente para ahorrar recursos
  }, [ToShow]);//2do argumento de useEffect, arreglo de dependencias. si tiene algo, el efecto se aplicara cada vez que este cambie.

  return (
    <div className="App">
      <h1>Mass Effect</h1>
      <div className="contenedor-Testimonios">
        {dataME.map((testimonio, index) => (
          <Testimonio
            key={index}
            ref={(index === dataME.length - 1) ? contenedorRef : null} // Asignar la referencia solo al último testimonio
            nombre={testimonio.nombre}
            profesion={testimonio.profesion}
            avatar={testimonio.avatar}
            descripcion={testimonio.descripcion}
          />
        ))}
      </div>
      <Contador numeroClicks={clicksAmount} />
      <div className="contenedor-Boton">
        <Boton texto="Aceptar" cual_boton={true} manejoClick={manejoClickAceptar} />
        <Boton texto="Cancelar" cual_boton={false} manejoClick={manejoClickCancelar} />
      </div>
    </div>
  );
}

export default App;//para que se muestre en vp, debe exportarse.
