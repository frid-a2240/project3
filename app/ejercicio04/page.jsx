'use client'
import React, { useState } from 'react';
import './style04.css';

const Ejercicio04 = () => {
    const [palabra, setPalabra] = useState('');
    const [resultado, setResultado] = useState('');

    const cambio = (e) => {
        setPalabra(e.target.value);
    };

    const analizar = () => {
        let estado = 0;
        const c = palabra.split('');

        for (let i = 0; i < c.length; i++) {
            if (c[i] === 'a' && estado === 0) {
                estado = 1;
            } else if (c[i] === 'b' && estado === 1) {
                estado = 0;
            } else if (c[i] === 'b' && estado === 0) {
                estado = 0;
            } else {
                setResultado('Cadena no aceptada');
                return;
            }
        }

        if (estado === 0) {
            setResultado('Cadena aceptada');
        } else {
            setResultado('Cadena no aceptada');
        }
    };
    const limpiar = () => {
        setPalabra('');
        setResultado('');
    };

    return (
        <div className="ejercicio-container p-4 md:p-8 lg:p-12">
            <h1 className="ejercicio-title text-2xl md:text-3xl lg:text-4xl">Ejercicio 04</h1>
            <div className="input-container">
                <input
                    value={palabra}
                    type="text"
                    placeholder="Coloca tu entrada"
                    className="input-field p-2 md:p-3 lg:p-4"
                    onChange={cambio}
                />
            </div>
            <div className="button-container flex justify-center gap-4 md:gap-8 lg:gap-12">
                <button className="analyze-button px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4" onClick={analizar}>Analizar</button>
                <button className="clear-button px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4" onClick={limpiar}>Limpiar</button>
            </div>
            <div className="resultado-container">
                {resultado}
            </div>
        </div>
    );    
    };
    export default Ejercicio04;
