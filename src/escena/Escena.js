// Recordar: los nombres de componentes siempre en MAYÚSCULA

// import React from 'react';  <= esto ya no hace falta, solo en el Index.js

import frases from './frases.json';
import { EstilosFrases } from './styled';

const Frase = () => <div>

</div>

// En un Map el primer elemento siempre es el objeto y el 2º el nº de iteracion en quye te encuentras dando vueltas


// Éste es el componente por defecto

export default Frase;

// EXPLICACIÓN EJERCICIO 1 / NIVEL 1:
// 1) Simplemente he puesto esto aquí:
// const PrimeraFrase = () => <div>El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial</div>;
// 2) Abajo he añadido un export default PrimeraFrase;
// 3) En App.js he añadido import PrimeraFrase from './escena/Escena';
// 4) Y ahí mismo he puesto:
// function App() {
//     return (
//         <div>
//             <PrimeraFrase />
//         </div>
//     );
// }
// 5) Sencillo: en Escena.js pongo la frase dentro de un componente, lo exporto, lo importo en la App y le digo dónde pintarlo.


// EXPLICACIÓN DE QUÉ HE HECHO EN EL EJERCICIO 2 / NIVEL 1:

// 1) Aquí se complica la cosa. Primero creo un Frases.json que tiene solo un objeto llamado Frases con un array que incluye 4 frases. Ahí no necesitamos nada más.
// 2) Aquí el const ya no es uno para cada frase sino uno genérico llamado Frase, donde se irá pintando a cada recorrido del Array la frase que le corresponda.
// 3) Para ello abajo he creado un Map que recorra el array y vaya pintando a cada vuelta la frase que toca.
// 3.2) Explicación del Map:
// - Frases.Frases (nos referimos al json Frases y en concreto a su objeto también llamado Frases).
// - (frase, key): lo primero es lo que retorna a cada vuelta, la key se asigna a cada vuelta para asegurarse que el valor no se repita.
// 4) Vamos a App.js habiendo hecho que exporte eso y allá que importe este componente.
// 5) Lo añadimos donde corresponde:
// function App() {
//     return (
//         <div>
//             <Frase />
//         </div>
//     );
// }
// EDIT:
// En el json no cal que cree un objeto Frases, puedo poner el array directamente y va que chuta. Por eso al final he puesto frases.map
