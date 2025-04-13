import "./login.css";

import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import React, { useState } from "react";

function Login({ onLoginSuccess = () => {} }) {
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const respuesta = await fetch("http://localhost/login-backend/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          correoElectronico,
          contrasena
        })
      });
  
      const data = await respuesta.json();
  
      if (data.estado === "ok") {
        onLoginSuccess(data);
        localStorage.setItem('nombreUsuario', JSON.stringify(data));
        navigate('/');
      } else {
        setError('Usuario o contrasena incorrectos');
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      setError("No se pudo conectar con el servidor");
    }
  };

  return (
    <div className="contenedorLogin">
      <Row>
        <Col md={6}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/BannerLogin.jpg`}
            alt="BannerLogin"
            className="BannerLogin"
          />
        </Col>

        <Col className="contenedorForm" md={5}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/Logo.png`}
            alt="LogoLogin"
            className="LogoLogin"
          />
          <h5>Inicio de Sesión</h5>
          <br />
          {error && <p style={{ color: "red" }}>{error}</p>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control
                type="email"
                placeholder="@example.com"
                value={correoElectronico}
                onChange={(e) => setCorreoElectronico(e.target.value)}
                required
              />

              <Form.Text className="text-muted">
                Nunca compartiremos su correo electrónico con nadie más.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                required
              />
            </Form.Group>
            <div className="BotonesFormulario">
              <button type="submit" className="btn btn-primary ">Ingresar</button>

              <Link
                type="button"
                className="btn btn-outline-secondary font-semibold"
                to={"/"}
              >
                Volver
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
