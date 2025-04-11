import React from "react";
import "./adminClientes.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function AdminClientes() {
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
            <th>Aciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>
              <div className="BotonesFormulario">
              <Link
                  type="button"
                  className="btn btn-primary font-semibold"
                  to={"/AdminClientes"}
                >
                  Editar
                </Link>

                <Link
                  type="button"
                  className="btn btn-outline-danger font-semibold"
                  to={"/"}
                >
                  Eliminar
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
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
