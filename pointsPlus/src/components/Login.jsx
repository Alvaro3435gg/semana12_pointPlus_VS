import React from 'react'
import Tarjeta from "./Tarjeta/Tarjeta.jsx";
import Boton from "./Boton/Boton.jsx";
import Logo from "./Logo/Logo.jsx";
import TextBox from "./TextBox/TextBox.jsx";
import LettersBox from "./LettersBox/LettersBox.jsx";
import { Link } from 'react-router-dom';



function Login() {


    return (
        <>
            <Logo></Logo>
            <LettersBox name ={"Introduzca Usuario"}></LettersBox>
            <TextBox name ={"Usuario"}></TextBox>
            <LettersBox name ={"Introduzca Contraseña"}></LettersBox>
            <TextBox name ={"Contraseña"}></TextBox>
            <Link to="/shopping">
                <Boton></Boton>
            </Link>


        </>
    )
}
/* <Tarjeta name ={"Introduzca Contraseña"}></Tarjeta> */
export default Login