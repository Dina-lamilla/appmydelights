import React from 'react';
import { Navigate } from 'react-router-dom';

const RutaPrivada = ({ children }) => {
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  // Si hay usuario, deja entrar. Si no, redirige al login
  return usuario ? children : <Navigate to="/Login" />;
};

export default RutaPrivada;