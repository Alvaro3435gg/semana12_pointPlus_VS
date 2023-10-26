import React from 'react';
import "./Boton.css"
function Boton() {
    return (
        <div className = "Boton">
            <button className = "Boton" onClick={() => alert('Se supone que te lleva a ' +
                'algun lugar.... pero no se como xd')}>
                INGRESAR
            </button>
        </div>
    );
}

export default Boton;