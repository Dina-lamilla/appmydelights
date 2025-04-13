import React, { useEffect, useState } from "react";
import "./adminClientes.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function AdminClientes() {
  const [usuarios, setUsuarios] = useState([]);

  // Obtener lista de usuarios
  const cargarUsuarios = async () => {
    try {
      const response = await fetch(
        "http://localhost/login-backend/listar_usuarios.php"
      );
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
    }
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  // Función para eliminar un usuario
  const eliminarUsuario = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
      try {
        const response = await fetch(
          "http://localhost/login-backend/eliminar_usuario.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ usuarioID: id }),
          }
        );

        const resultado = await response.json();
        alert(resultado.mensaje);
        cargarUsuarios(); // Recargar usuarios actualizados
      } catch (error) {
        console.error("Error al eliminar usuario:", error);
      }
    }
  };

  return (
    <div className="contenerdoPtablas">
      <h4>Usuarios Registrados</h4>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>nombre Usuario</th>
            <th>numero Cedula</th>
            <th>genero</th>
            <th>direccion Residencia</th>
            <th>telefono Celular</th>
            <th>correo Electronico</th>
            <th>tipo de Cliente</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.usuarioID}>
              <td>{usuario.usuarioID}</td>
              <td>{usuario.nombreUsuario}</td>
              <td>{usuario.numeroCedula}</td>
              <td>{usuario.genero}</td>
              <td>{usuario.direccionResidencia}</td>
              <td>{usuario.telefonoCelular}</td>
              <td>{usuario.correoElectronico}</td>
              <td>{usuario.tipoCliente}</td>
              <td>
                <div className="BotonesFormulario">
                  <Link
                    type="button"
                    className="btn btn-primary font-semibold"
                    to={`/FormEditar/${usuario.usuarioID}`} // Corregido con parámetro dinámico
                  >
                    Editar
                  </Link>

                  <button
                    type="button"
                    className="btn btn-outline-danger font-semibold"
                    onClick={() => eliminarUsuario(usuario.usuarioID)}
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link
        type="button"
        className="btn btn-outline-secondary font-semibold"
        to={"/"}
      >
        Volver
      </Link>
    </div>
  );
}

export default AdminClientes;
