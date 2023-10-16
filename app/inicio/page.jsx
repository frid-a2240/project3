import React from 'react';
import './inicio.css'; 
import Link from 'next/link';

const Inicio = () => {
    return (
        <div className="container p-4 md:p-8 lg:p-12">
            <h1 className="title text-3xl md:text-4xl lg:text-5xl mb-4">Ejercicios de Autómatas Finitos Deterministas (DFA)</h1>
            <Link href={'/ejercicio'}>
            <div className="exercise p-6 md:p-8 lg:p-10">
                <h2 className="text-xl md:text-2xl lg:text-3xl">Ejercicio 1:</h2>
                <p className="text-base md:text-lg lg:text-xl">Construye un DFA que acepte todas las cadenas que inicien con letras</p>
            </div>
             </Link>

             <Link href={'/ejercicio02'}> 
            <div className="exercise p-6 md:p-8 lg:p-10">
                <h2 className="text-xl md:text-2xl lg:text-3xl">Ejercicio 2:</h2>
                <p className="text-base md:text-lg lg:text-xl">Construye un DFA que acepte todas las cadenas que contengan la palabra "aabb".</p>
            </div>
             </Link>

             <Link href={'/ejercicio03'}>
            <div className="exercise p-6 md:p-8 lg:p-10">
                <h2 className="text-xl md:text-2xl lg:text-3xl">Ejercicio 3:</h2>
                <p className="text-base md:text-lg lg:text-xl">Construye un DFA que acepte todas las cadenas que inician con 0 (solo números).</p>
            </div>
            </Link>

            <Link href={'/ejercicio04'}>
            <div className="exercise p-6 md:p-8 lg:p-10">
                <h2 className="text-xl md:text-2xl lg:text-3xl">Ejercicio 4:</h2>
                <p className="text-base md:text-lg lg:text-xl">Construye un DFA que acepte todas las cadenas sobre (a,b) donde cada "a" deberá ser seguida por una "b". Las "b" solas también son aceptadas.</p>
            </div>
            </Link>
        </div>
    );
};

export default Inicio;
