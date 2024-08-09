import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio/Inicio.jsx";
import Buscador from "../pages/Buscador/Buscador.jsx";
const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Inicio />} />
      <Route path="/buscador" element={<Buscador />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
