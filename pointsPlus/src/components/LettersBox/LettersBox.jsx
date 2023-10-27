import React from 'react'

import "./LettersBox.css"

const LettersBox = (props) => {

    return(<div className={"trapezoide"}>
        <p className={"text"}>{props.name}</p>
    </div>)
}
export default LettersBox