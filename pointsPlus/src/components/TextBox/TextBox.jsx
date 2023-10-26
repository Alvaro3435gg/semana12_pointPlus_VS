import React, { useState } from 'react';
import './TextBox.css'



    const TextBox = (props) => {
        const [textoSecreto, setTextoSecreto] = useState('');
        return (
            <div>
                <input
                    className="Box"
                    type="password"
                    value={textoSecreto}
                    onChange={(e) => setTextoSecreto(e.target.value)}
                    placeholder = {props.name}
                />
            </div>
        );
    }

export default TextBox;