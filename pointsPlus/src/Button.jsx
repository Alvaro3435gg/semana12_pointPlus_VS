import React from 'react';
import * as PropTypes from "prop-types";

class Button extends React.Component {
    render() {
        let {text} = this.props;
        const buttonStyle = {
            width: '20em', // Utilizamos 'em' en lugar de 'px'
            height: '20em',
            borderRadius: '50%', // Esto hace que el botón sea circular
            backgroundColor: 'white', // Color de fondo
            color: 'blue', // Color del texto
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
        };

        return (
            <button style={buttonStyle}>
                {text}
            </button>
        );
    }
}

Button.propTypes = {text: PropTypes.any}

export default Button;