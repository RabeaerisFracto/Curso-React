import './App.css';
import './componentes/recursos/fonts/fonts.css'//para importar fuente, se importa css configurado con @font-face
import dataME from './componentes/dataME.json';//importar json para evitar cambiar app
import {Testimonio} from './componentes/testimonio';//importar componente desde js(x). si esta entre {}, es llamado x nombre.

function App() {
  return (
    <div className="App">
      <h1>Mass Effect</h1>{/*se pueden agregar elementos antes del componente*/}
      <div className='contenedor-Testimonios'>
      {dataME.map((testimonio,index)=>(/*mapeo del json, para que baje desdpues de cada ",".*/
        <Testimonio/*nombre de complemento importado, con PascalCase*/
        key={index}
        nombre={testimonio.nombre}
        profesion={testimonio.profesion}
        avatar={testimonio.avatar}
        descripcion={testimonio.descripcion}
      />
      ))}</div>
    </div>
  );
}

export default App;//para que se muestre en vp, debe exportarse.
