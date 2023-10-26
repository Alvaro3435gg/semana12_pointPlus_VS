import React from 'react'
import Tarjeta from "./components/Tarjeta/Tarjeta.jsx";
import Boton from "./components/Boton/Boton.jsx";
import Logo from "./components/Logo/Logo.jsx";
import TextBox from "./components/TextBox/TextBox.jsx";
import LettersBox from "./components/LettersBox/LettersBox.jsx";


function App() {


  return (
    <>
        <Logo></Logo>
        <LettersBox name ={"Introduzca Usuario"}></LettersBox>
        <TextBox name ={"Usuario"}></TextBox>
        <LettersBox name ={"Introduzca Contraseña"}></LettersBox>
        <TextBox name ={"Contraseña"}></TextBox>
        <Boton> </Boton>
    </>
  )
}
/* <Tarjeta name ={"Introduzca Contraseña"}></Tarjeta> */
export default App
