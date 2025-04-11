import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

// Importamos el módulo de enrutamiento
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Importamos los componentes
import ClientForm from "./componentes/clientForm/clientForm.jsx";
import ComidaC from "./componentes/comidaC/comidaC.jsx";
import Compras from "./componentes/compras/compras";
import Home from "./componentes/home/home.jsx";
import OServicios from "./componentes/oServicios/oServicios.jsx";
import PlatosCarta from "./componentes/platosCarta/platosCarta.jsx";
import Login from "./componentes/login/login.jsx";
import AdminClientes from "./componentes/adminClientes/adminClientes.jsx";


import RutaPrivada from "./componentes/RutaPrivada.jsx";

// Definimos el componente principal con las rutas
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ComidaC" element={<ComidaC />} />
      <Route path="/OServicios" element={<OServicios />} />
      <Route path="/PlatosCarta" element={<PlatosCarta />} />
      <Route path="/ClientForm" element={<ClientForm />} />
      <Route path="/Compras" element={<Compras />} />
      <Route
        path="/Login"
        element={
          <Login
            onLoginSuccess={(usuario) => {
              console.log("Login exitoso", usuario);
              // Puedes agregar más lógica si quieres (ej. redirigir, guardar en contexto, etc.)
            }}
          />
        }
      />

      <Route
        path="/AdminClientes"
        element={
          <RutaPrivada>
            <AdminClientes />
          </RutaPrivada>
        }
      />
    </Routes>
  </Router>
);

// Renderizamos la aplicación
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Medición de rendimiento
reportWebVitals();
