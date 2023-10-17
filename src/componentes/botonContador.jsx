import '../stylesheets/botonContador.css'

export function Boton({texto, cual_boton, manejoClick}) {
    return(
        <button
        className= {cual_boton ? 'boton Aceptar' : 'boton Cancelar'}
        onClick={manejoClick}>
        {texto}
        </button>
    )
}
export function Contador({ numeroClicks }){
    return(
        <div className="contador">
            { numeroClicks }
        </div>
    )
}
//se puede tener mas de un componente por jsx.
//ev vez de un props, cerrar <> y poner entre{} el argumento, cerrando con </>
