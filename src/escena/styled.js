import styled from 'styled-components';

export const EstilosFrases = styled.div`
text-align: center;
border-radius: 50px;
border: #000000 2px solid;
margin: 10px;


// Aquí añadimos un estilo en función de la props

background-color: ${({ isTrue }) => isTrue ? 'green' : 'red'};
`;

export const EstiloPantallaInicial = styled.div`
background-color: #9a9aeb;
min-height: 100vh;

// Si no le pongo min-height el div con el estilo solo llega hasta donde hay contenido. Con este valor me ocupará siempre toda la pantalla

button {
    display: grid;
    margin: auto;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

`;
// button {
//     display: inline - block;
//     margin - top: 20px;
//     height: 80px;
//     width: 49 %;
//     font - size: 30px;
// }


