import React from 'react'
import "./Logo.css"
import IconUserBig from '../../assets/IconUserBig.svg';

function Logo() {
    return (
        <div className={"Bckg_Logo"}>
            <img src={IconUserBig} alt="Descripción de la imagen" className="logo" />
        </div>
        /*
    return(<div className={"contenedorTarjeta"}>
        <div className={"topBar"}></div>
        <p>Hola {props.name}</p>
    </div>)*/
    );
}

export default Logo;
