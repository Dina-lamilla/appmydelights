import "./clientForm.css";
import Nav from "../nav/nav";

//bootstrap
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

//-----------------------------HOME----------------------------------

function ClientForm() {
  const [nombreUsuario, setnombreUsuario] = useState("");
  const [numeroCedula, setnumeroCedula] = useState("");
  const [genero, setGenero] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [direccionResidencia, setdireccionResidencia] = useState("");
  const [telefonoCelular, settelefonoCelular] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegistro = async (e) => {
    e.preventDefault();
  
    // Validar que todos los campos estén completos
    if (
      !nombreUsuario.trim() ||
      !numeroCedula.trim() ||
      !genero.trim() ||
      !fechaNacimiento.trim() ||
      !direccionResidencia.trim() ||
      !telefonoCelular.trim() ||
      !correoElectronico.trim() ||
      !contrasena.trim()
    ) {
      setError("Todos los campos son obligatorios.");
      return;
    }
  
    // Verificar que los valores están siendo enviados correctamente
    console.log("Datos que se están enviando:", {
      nombreUsuario,
      numeroCedula,
      genero,
      fechaNacimiento,
      direccionResidencia,
      telefonoCelular,
      correoElectronico,
      contrasena,
    });
  
    try {
      const respuesta = await fetch("http://localhost/login-backend/registrar.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombreUsuario,
          numeroCedula,
          genero,
          fechaNacimiento,
          direccionResidencia,
          telefonoCelular,
          correoElectronico,
          contrasena,
        }),
      });
  
      if (!respuesta.ok) {
        // Si el servidor devuelve un error HTTP (por ejemplo, 500 o 404), muestra el error
        setError("Error en el servidor. Intenta más tarde.");
        console.error("Error HTTP:", respuesta.status);
        return;
      }
  
      const data = await respuesta.json(); // Intentamos parsear la respuesta como JSON
  
      if (data.estado === "ok") {
        alert("¡Registro exitoso!");
        navigate("/Login");
      } else {
        setError(data.mensaje || "Error al registrar");
      }
    } catch (error) {
      // En caso de error de red o problemas con la conexión
      setError("No se pudo conectar al servidor");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Row>
        {/* Menú a la izquierda */}
        <Col md={2}>
          <Nav />
        </Col>

        {/* ----------------------------------------FORMULARIO a la derecha------------------------------------------------------------- */}

        <Col md={9}>
          <div className="contenedorFormulario">
            <Form className="FormularioRegistro" onSubmit={handleRegistro}>
              <h5>Formulario De Registro</h5>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formRegistroUser">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    value={nombreUsuario}
                    onChange={(e) => setnombreUsuario(e.target.value)}
                    required
                  />
                  <Form.Text>
                    Ingresa tu nombre de usuario. Asegúrate de que tenga entre 4 y 16 caracteres.
                  </Form.Text>
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formRegistroCedula">
                  <Form.Label>Número de cédula</Form.Label>
                  <Form.Control
                    type="text"
                    value={numeroCedula}
                    onChange={(e) => setnumeroCedula(e.target.value)}
                    required
                  />
                  <Form.Text>
                    Asegúrate de ingresar tu número de cédula correctamente para validar tu identidad.
                  </Form.Text>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group as={Col} className="mb-3" controlId="formRegistroGenero">
                  <Form.Label>Género</Form.Label>
                  <Form.Select
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Seleccionar Género
                    </option>
                    <option value="Femenino">Femenino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Otro">Otro</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formRegistroFechaNacimiento">
                  <Form.Label>Fecha de Nacimiento</Form.Label>
                  <Form.Control
                    type="date"
                    value={fechaNacimiento}
                    onChange={(e) => setFechaNacimiento(e.target.value)}
                    required
                  />
                  <Form.Text>Ingresa tu fecha de nacimiento en el formato correcto.</Form.Text>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formRegistroDireccion">
                  <Form.Label>Dirección de Residencia</Form.Label>
                  <Form.Control
                    value={direccionResidencia}
                    onChange={(e) => setdireccionResidencia(e.target.value)}
                    required
                  />
                  <Form.Text>Ingresa tu dirección de residencia.</Form.Text>
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formRegistroTelefono">
                  <Form.Label>Teléfono Celular</Form.Label>
                  <Form.Control
                    type="text"
                    value={telefonoCelular}
                    onChange={(e) => settelefonoCelular(e.target.value)}
                    required
                  />
                </Form.Group>
              </Row>

              <Form.Group as={Col} className="mb-3" controlId="formRegistroCorreo">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  value={correoElectronico}
                  onChange={(e) => setCorreoElectronico(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formRegistroContrasena">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="BotonesFormulario">
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>

                <Link
                  type="button"
                  className="btn btn-outline-secondary font-semibold"
                  to={"/"}
                >
                  Volver
                </Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ClientForm;
