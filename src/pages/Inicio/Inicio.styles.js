import styled, { createGlobalStyle } from "styled-components";
import fondo from "../../assets/rick-and-morty-art-4k-wallpaper-uhdpaper.com-214@0@j.jpg";
import fuente from "../../assets/Storm Gust.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "fuente";
    src: url(${fuente});
  }

  body {
    margin: 0;
    padding: 0;
    background-image: url(${fondo});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    font-family: "fuente";
  }
`;

export const Titulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 20vh; /* Ajusta según sea necesario */

  h1 {
    color: red;
    font-size: 6rem;
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 1); /* Sombra blanca */
    margin: 0; /* Elimina el margen por defecto del h1 */
  }
`;

export const Start = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 60vh; /* Ajusta según sea necesario */

  a {
    text-decoration: none; /* Elimina subrayado del enlace */
  }

  h1 {
    color: red;
    font-size: 6rem;
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 1); /* Sombra blanca */
    cursor: pointer; /* Hace que el cursor cambie a puntero */
    margin: 0; /* Elimina el margen por defecto del h1 */
  }
`;
