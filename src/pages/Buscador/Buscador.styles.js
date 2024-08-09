import styled, { createGlobalStyle } from "styled-components";
import fondo from "../../assets/rick-sanchez-silhouette-rick-and-morty-4k-wallpaper-uhdpaper.com-938@0@e.jpg";
import fuente from "../../assets/Pesta Rakyat.ttf";

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${fondo});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`;

export const Container = styled.div`
  width: 1024px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px 100px;
  margin-top: 20px;

  @font-face {
    font-family: "fuente";
    src: url(${fuente});
  }
`;

export const CardWrapper = styled.div`
  perspective: 1000px;
  width: 250px;
  height: 300px;
  cursor: pointer;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ $isFlipped }) =>
    $isFlipped ? "rotateY(180deg)" : "rotateY(0)"};
`;
export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #2f1552;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: #6ff04e;
    font-family: "fuente";
    text-align: center;
    width: 250px;
    height: 60px;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 10px;
    border: 4px inset #fb2abb;
  }
`;

export const CardBack = styled(CardFront)`
  transform: rotateY(180deg);
  background-color: #1e082f;
  p {
    color: #fff;
    margin: 5px 0;
    text-align: center; /* Centra el texto */
    word-wrap: break-word; /* Permite que las palabras largas se dividan en varias líneas */
    max-width: 100%; /* Asegura que el texto no se salga del contenedor */
    font-size: 1.2rem;
  }
`;

export const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  padding: 10px;
  border-radius: 10px;

  span {
    color: white;
    margin: 0 20px;
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  background-color: #c90028;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #a6001d;
  }

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
`;
