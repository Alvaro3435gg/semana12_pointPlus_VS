import React from 'react'

import "./Tarjeta.css"
/*
function Tarjeta() {
    
}*/
const Tarjeta = (props) => {

    return(<div className={"contenedorTarjeta"}>
        <div className={"topBar"}></div>
        <p>Hola {props.name}</p>
    </div>)
}
export default Tarjeta