import React from "react";
import { GlobalStyle, Start, Titulo } from "./Inicio.styles";

const Inicio = () => {
  return (
    <>
      <GlobalStyle />
      <Titulo>
        <h1>Bienvenidos a Rick and Morty</h1>
      </Titulo>
      <Start>
        <a href="/buscador">
          <h1>START</h1>
        </a>
      </Start>
    </>
  );
};

export default Inicio;
