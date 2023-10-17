import './App.css';
import './componentes/recursos/fonts/fonts.css'//para importar fuente, se importa css configurado con @font-face
import {Testimonio} from './componentes/testimonio';//importar componente desde js(x). si esta entre {}, es llamado x nombre.
import {Boton} from './componentes/botonContador';
import {Contador} from './componentes/botonContador';
import React, { useState } from 'react';


function App() {
  const [clicksAmount,setClickAmounts] = useState(0)
  const manejoClickAceptar = ()=>{setClickAmounts(clicksAmount+1)}
  const manejoClickCancelar = ()=>{setClickAmounts(0);}

  return (
    <div className="App">
      <h1>Mass Effect</h1>
      <div className="contenedor-Testimonios">

          <Testimonio/>

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