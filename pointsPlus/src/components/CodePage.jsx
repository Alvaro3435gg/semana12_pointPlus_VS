import React from 'react';
import codigoqr from './codigoqr.jpeg';
import '../components/App.css';

function CodePage() {
    return (
        <div>
            <img src={codigoqr} alt="Código QR" className="aquiVaElQR" />
        </div>
    );
}

export default CodePage;
