// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import Frase from './escena/Escena';
import frases from './escena/frases.json';
import { EstilosFrases, EstiloPantallaInicial } from './escena/styled';
import imagen from './img/imagen.jpg';

// IMPORTANTE: los nombres de los componentes siempre empezando en Mayúsculas o no funcionarán

// import { PrimeraFrase} from './escena/Escena'; <= cuando es un DEFAULT no ponemos aquí las llaves

function App() {

  ///////////////////////////////// CONTADOR HECHO CON USESTATE/////////////////////////////////
  // IMPORTANTE: esto no es más que un contador en "abstracto", que luego aplico a frases más abajo

  const [position, setPosition] = useState(0);

  // Qué es esto: position = valor que tiene en este momento presente, setPosition valor nuevo que le damos, useState(nº) valor por defecto

  ////////////////////////////// USESTATE PARA EL BOTÓN DE EMPEZAR AVENTURA ////////////////////

  const [screenState, setScreen] = useState(false);

  //////////////////// FUNCIONES DE LOS BOTONES DE ANTERIOR - SIGUIENTE //////////////////////////////////

  const anterior = () => {

    position - 1 < 0 ? setPosition(frases.length - 1) : setPosition(position - 1);
  }

  // setPosition es como un Setter, no tengo que poner dentro ninguna fórmula, solo el nº que debe devolver

  const siguiente = () => {
    position + 1 > frases.length - 1 ? setPosition(0) : setPosition(position + 1);
  }

  //////////////////////FUNCION DEL BOTÓN DE LA PANTALLA INICIAL///////////////////////////////////

  const screen = () => {
    setScreen(true);
  }

  const condicion = screenState;

  // Por defecto tenemos el screenState en FALSE. Al clicar a la función screen() hacemos que éste pase a ser TRUE.

  return (

    <div>

      {/* Ponemos <> y </> entre el código que queremos poner entre cada condición */}

      {condicion ? <>       <button onClick={() => anterior()}>Anterior</button> <button onClick={() => siguiente()}>Següent</button>

        {
          frases.map((frase, key) => {

            return <EstilosFrases isTrue={key == position} ><p key={key}>{frase}</p></EstilosFrases>
            // En styled le dijimos el estilo a tener si el valor es true o false, y aquí le decimos que será True cuando la key sea igual al nº de posición, es decir, que coincida posición del Map con el contador que tenemos arriba.
          })
        };</> : <>
        <EstiloPantallaInicial>
          <div className="intro">
            <h1>Bienvenido a esta aventura interactiva</h1>
            <img src={imagen}></img>
            <p>¿Quieres acompañar al protagonista y decidir por él lo que tiene que hacer? ¡Clica abajo!</p>
          </div>
          <button onClick={() => screen()}>Accede a la aventura</button>

        </EstiloPantallaInicial>
      </>}

    </div >

  );
}

export default App;

// EXPLICACIÓN EJERCICIO 4:
// Primera parte, ejemplo sencillo: creo en styled.js un estilo que diga que pinte un color si es true y otro si no es true:
// background - color: ${ ({ isTrue }) => isTrue ? 'green' : 'red' };
// `;
// // Luego aquí lo pongo a lo bruto diciendo que es {true}:  return <EstilosFrases isTrue={true} ><p key={key}>{frase}</p></EstilosFrases>
// Qué hago luego:
// 1) Creo un contador con UseState, a ese contador le dan igual las Frases, solo cuenta "en abstracto" empezando en 0 y va sumando o restando números en función de las flechas Anterior/Siguiente. La primera vez que cargue por tanto estará en el elemento 0 del array, es decir, la primera frase.
// 2) El Map de abajo recorre todo el array de frases.json y las va imprimiendo asignando a cada una un key, es decir, su nº de posición dentro del array.
// 3) Eso hacía que se imprimieran todas las frases. OK. Pero además le hemos añadido un styled.component para que pinte verde si es true y rojo si es false.
// 4) ¿Qué le decimos como condición? Si la key de cada elemento del Map coincide con el nº del contador de arriba (que, repetimos, está desvinculado totalmente de este array, solo va aumentando o bajando de nº en función de las flechas Anterior-Siguiente) es True, por tanto, píntalo de verde. Et voilà! Cada vez que cambiemos el nº del contador será otro elemento del Array que daría True.
// 5) En circunstancias normales con Javascript se solucionaría eso fácilmente, pero en React no vuelve a evaluar el estado de la condición cuando ésta ha cambiado. El programa "no se entera" de que ha cambiado a no ser que le añadas un UseState. De modo que hemos de hacer ese contador raro con UseState para que se vaya fijando cada vez que cambia.