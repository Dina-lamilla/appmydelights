import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";


function FormEditar() {
  const { id } = useParams();
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [numeroCedula, setNumeroCedula] = useState("");
  const [genero, setGenero] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [direccionResidencia, setDireccionResidencia] = useState("");
  const [telefonoCelular, setTelefonoCelular] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [tipoCliente, setTipoCliente] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarUsuario = async () => {
      try {
        const response = await fetch(`http://localhost/login-backend/obtener_usuario.php?id=${id}`);
        const data = await response.json();

        if (data) {
          setNombreUsuario(data.nombreUsuario);
          setNumeroCedula(data.numeroCedula);
          setGenero(data.genero);
          setFechaNacimiento(data.fechaNacimiento);
          setDireccionResidencia(data.direccionResidencia);
          setTelefonoCelular(data.telefonoCelular);
          setCorreoElectronico(data.correoElectronico);
          setTipoCliente(data.tipoCliente);
        }
      } catch (error) {
        console.error("Error al cargar usuario:", error);
        setError("Error al cargar los datos del usuario.");
      }
    };

    cargarUsuario();
  }, [id]);

  const handleEditar = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (
      !nombreUsuario.trim() ||
      !numeroCedula.trim() ||
      !genero.trim() ||
      !fechaNacimiento.trim() ||
      !direccionResidencia.trim() ||
      !telefonoCelular.trim() ||
      !correoElectronico.trim() ||
      !tipoCliente.trim()
    ) {
      setError("Todos los campos son obligatorios.");
      setLoading(false);
      return;
    }

    // Crear el objeto de datos que se enviará al backend
    const dataToSend = {
      usuarioID: id,
      nombreUsuario,
      numeroCedula,
      genero,
      fechaNacimiento,
      direccionResidencia,
      telefonoCelular,
      correoElectronico,
      tipoCliente,
    };

    // Solo agregar 'contrasena' si no está vacía
    if (contrasena.trim()) {
      dataToSend.contrasena = contrasena;
    }

    try {
      const respuesta = await fetch("http://localhost/login-backend/editar.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const data = await respuesta.json();

      if (!respuesta.ok) {
        setError(`Error en el servidor. Código de estado: ${respuesta.status}`);
      } else if (data.estado === "ok") {
        alert("¡Registro actualizado con éxito!");
        navigate("/AdminClientes");
      } else {
        setError(data.mensaje || "Error desconocido al actualizar");
      }
    } catch (error) {
      setError("No se pudo conectar al servidor. Intenta más tarde.");
      console.error("Error en la conexión:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contenedorFormulario">
      <Row>
        <Col md={2}></Col>
        <Col md={9}>
          <div className="FormularioEditar">
            <h5>Formulario de Edición de Usuario</h5>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Form onSubmit={handleEditar}>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>ID</Form.Label>
                  <Form.Control value={id} readOnly />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Nombre de Usuario</Form.Label>
                  <Form.Control value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)} required />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Número de Cédula</Form.Label>
                  <Form.Control value={numeroCedula} onChange={(e) => setNumeroCedula(e.target.value)} required />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Género</Form.Label>
                  <Form.Select value={genero} onChange={(e) => setGenero(e.target.value)} required>
                    <option value="" disabled>Seleccionar Género</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Otro">Otro</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Fecha de Nacimiento</Form.Label>
                  <Form.Control type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Dirección de Residencia</Form.Label>
                  <Form.Control value={direccionResidencia} onChange={(e) => setDireccionResidencia(e.target.value)} required />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Teléfono Celular</Form.Label>
                  <Form.Control value={telefonoCelular} onChange={(e) => setTelefonoCelular(e.target.value)} required />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" value={correoElectronico} onChange={(e) => setCorreoElectronico(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} placeholder="Dejar en blanco para no cambiar" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tipo de Cliente</Form.Label>
                <Form.Control value={tipoCliente} onChange={(e) => setTipoCliente(e.target.value)} required />
              </Form.Group>

              <Button variant="primary" type="submit" disabled={loading}>
                {loading ? "Cargando..." : "Guardar Cambios"}
              </Button>
              
            </Form>
            
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default FormEditar;
