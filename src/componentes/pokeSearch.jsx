import { useEffect, useState } from 'react';
import axios from 'axios';


export function PokeSearch(busqueda, numeroPagina) {//funcion con 2 parametros
  const [carga, setCarga] = useState(true);
  const [error, setError] = useState(false);
  const [pokes, setPokes] = useState([]);
  const [hayMas, setHayMas] = useState(false);
  useEffect(()=>{
    setHayMas([])
  },[busqueda])
  useEffect(()=>{//use effect para uso de JS antes de return
    setCarga(true)
    setError(false)
    // let cancel//K para cancelar continua busqueda una vez hay un input escrito en app principal
    const cancelar = new AbortController();
    axios({//libreria actualizada de lazyLoad
      method: 'GET',//metodo, url de json o API.
      url: 'https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/birds_north_america.json',
      params: {q: busqueda, page: numeroPagina}
      //Parametros q y page, correspondientes a parametros de funcion principal
      // cancelToken: new axios.CancelToken(c=> cancel = c)//metodo necesario para cancelar continua busqueda
    }).then(res=>{//then xke devuelve una promesa
      if(!busqueda){
        setPokes([])
      }else{setPokes([...new Set([...res.data.birds.map(b=>b.family)])])
      //Set([]) para retornar solo valores no repetidos,
      setHayMas(res.data.birds.length > 0)//booleano para que no intente cargar mas una vez se acabe la data
      setCarga(false)//se detiene carga
      console.log(res.data)
      console.log(res.data.birds.map(b=>b.family))
      console.log(pokes)
    }}).catch(e=>{//catch xke retorna promesa, y es necesario en caso de error
      setError(true)
      console.log(e)//esto es para manejar el error
    })
    cancelar.abort()
    // return () => cancel()
  },[busqueda, numeroPagina])//cuando se activa funcion? cuando cambia cualquiera de estos 2 parametros
  return {carga, error, pokes, hayMas}
}
