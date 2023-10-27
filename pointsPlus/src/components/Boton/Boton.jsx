import React from 'react';
import "./Boton.css"
function Boton() {
    return (
        <div className = "Boton">
            <button className = "Boton" onClick={() => alert('ingresando')}>
                INGRESAR
            </button>
        </div>
    );
}

export default Boton;