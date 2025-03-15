import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importamos el modulo que permite que se lea el componente para los links
import {createBrowserRouter, RouterProvider} from "react-router-dom";

//importamos modulos/COMPONENTES

import ClientForm from './componentes/clientForm/clientForm.jsx';
import ComidaC from './componentes/comidaC/comidaC.jsx';
import Compras from './componentes/compras/compras';
import Home from './componentes/home/home.jsx';
import OServicios from './componentes/oServicios/oServicios.jsx';
import PlatosCarta from './componentes/platosCarta/platosCarta.jsx';

const router=createBrowserRouter(
    [
      {
        //Elemento HOME estara en esta dirección "/"
        path: "/",
        element: <Home/> //llamamos el componente
      },
      
      {
        path: "/ComidaC",
        element: <ComidaC/>
      },
      
      {
        path: "/Compras",
        element: <Compras/> 
      },

      {
        path: "/OServicios",
        element: <OServicios/> 
      },

      {
        path: "/PlatosCarta",
        element: <PlatosCarta/> 
      },

      {
        path: "/ClientForm",
        element: <ClientForm/> 
      },
    ]
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Usamos nuestra función router, tiene que estar integrada en RouterProvider */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
