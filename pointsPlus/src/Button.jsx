import React from 'react';

const Button = () => {
    const buttonStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%', // Esto hace que el botón sea circular
        backgroundColor: 'blue', // Color de fondo
        color: 'white', // Color del texto
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    };

    return (
        <button style={buttonStyle}>
            Points
        </button>
    );
};

export default Button;