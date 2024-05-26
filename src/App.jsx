import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import Error404 from "./components/pages/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import CardProducto from "./components/pages/producto/CardProducto";
import { useState } from "react";
import ListaRutasAdmin from "./components/routes/ListaRutasAdmin";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import DetalleProducto from "./components/pages/DetalleProducto";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem('usuarioRollingCoffee')) || '';
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario)

  return (
    <BrowserRouter>
      <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} className="menu"></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          exact
          path="/administrador/*"
          element={
          <RutasProtegidas>
            <ListaRutasAdmin></ListaRutasAdmin>
          </RutasProtegidas>}
        ></Route>
       
        <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>

        <Route
          exact
          path="/detalle/:id"
          element={<DetalleProducto></DetalleProducto>}
        ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
