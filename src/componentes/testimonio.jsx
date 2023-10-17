import React from "react";
import "../stylesheets/Testimonio.css";
import dataME from './dataME.json';

export function Testimonio() {
    return (
        <div>
            {dataME.map((testimonial, index) => (
                <div key={index} className="contenedor-testimonio">
                    <img
                        className="avatar-testimonio"
                        src={require(`./recursos/img/me-${testimonial.avatar}.jpg`)}
                        alt={testimonial.avatar}
                        title={testimonial.nombre}
                    />
                    <div className="contenedor-texto-testimonio">
                        <h2 className="nombre-testimonio">{testimonial.nombre}</h2>
                        <h3 className="profesion-testimonio">{testimonial.profesion}</h3>
                        <p className="descripcion-testimonio">"{testimonial.descripcion}"</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Testimonio;