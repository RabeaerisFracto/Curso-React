import React from "react";
import "../stylesheets/Testimonio.css";
export function Testimonio(props){
    return (
        <div className="contenedor-testimonio">
            <img
                className="avatar-testimonio"
                src={require(`./recursos/img/me-${props.avatar}.jpg`)}
                alt={props.avatar}
                title={props.nombre}
            />
            <div className="contenedor-texto-testimonio">
                <h2 className="nombre-testimonio">{props.nombre}</h2>
                <h3 className="profesion-testimonio">{props.profesion}</h3>
                <p className="descripcion-testimonio">"{props.descripcion}"</p>
            </div>
        </div>
    );
}
//export default Testimonio;