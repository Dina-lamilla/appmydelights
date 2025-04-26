import React from "react";
import "./nav.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const nombreUsuario = JSON.parse(localStorage.getItem("nombreUsuario"));

  const cerrarSesion = () => {
    localStorage.removeItem("nombreUsuario");
    navigate("/Login");
  };

  
  console.log("nombreUsuario:", nombreUsuario);

  return (
    <div className="Container">
      <Row>
        <Col sm={0} id="navbar" className="MenuIz">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/Logo.webp`}
                alt="LogoNav"
                className="LogoNav"
              />
              {/* 
              NOTA:
              Esta imagen se carga desde la carpeta 'public'.
              Usa rutas absolutas comenzando con '/' o `${process.env.PUBLIC_URL}` para asegurar compatibilidad.
              NO usar 'import' para archivos en 'public', solo para imágenes dentro de 'src'.
              Ejemplo correcto:
                <img src={`${process.env.PUBLIC_URL}/assets/img/Logo.png`} alt="Logo" width="100%" />
              */}
            </ListGroup.Item>


            <ListGroup.Item className="BotonesIn-El">
            {nombreUsuario? (
              <>
                  Usuario: {typeof nombreUsuario === "string" ? nombreUsuario : nombreUsuario?.nombreUsuario}
                  <button
                    className="btn btn-danger btn-sm w-100"
                    onClick={cerrarSesion}
                  >
                    Cerrar sesión
                  </button>
              </>
            ) : (
              <>

                  <Link
                    type="button"
                    className="btn btn-outline font-semibold"
                    to={"/ClientForm"}
                  >
                    Registrarse
                  </Link>
                  <Link
                    type="button"
                    className="btn btn-outline-primary font-semibold"
                    to={"/Login"}
                  >
                    Ingresar
                  </Link>
                  <br />
                  <br />
              </>
            )}
            </ListGroup.Item>

            <ListGroup.Item>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                />
              </svg>
              <Link
                type="button"
                className="btn btn-outline font-semibold"
                to={"/"}
              >
                Inicio
              </Link>{" "}
              <br />
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
                />
              </svg>
              <Link
                type="button"
                className="btn btn-outline font-semibold"
                to={"/Compras"}
              >
                Compras
              </Link>
              <br />
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12.1429 11v9m0-9c-2.50543-.7107-3.19099-1.39543-6.13657-1.34968-.48057.00746-.86348.38718-.86348.84968v7.2884c0 .4824.41455.8682.91584.8617 2.77491-.0362 3.45995.6561 6.08421 1.3499m0-9c2.5053-.7107 3.1067-1.39542 6.0523-1.34968.4806.00746.9477.38718.9477.84968v7.2884c0 .4824-.4988.8682-1 .8617-2.775-.0362-3.3758.6561-6 1.3499m2-14c0 1.10457-.8955 2-2 2-1.1046 0-2-.89543-2-2s.8954-2 2-2c1.1045 0 2 .89543 2 2Z"
                />
              </svg>
              <Link
                type="button"
                className="btn btn-outline font-semibold"
                to={"/PlatosCarta"}
              >
                Platos a la Carta
              </Link>
              <br />
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                />
              </svg>
              <Link
                type="button"
                className="btn btn-outline font-semibold"
                to={"/ComidaC"}
              >
                Comida Corriente
              </Link>
            </ListGroup.Item>

            <ListGroup.Item>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
                  clipRule="evenodd"
                />
              </svg>
              <Link
                type="button"
                className="btn btn-outline font-semibold"
                to={"/OServicios"}
              >
                Otros Servicios
              </Link>
              <br />

              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M17 10v1.126c.367.095.714.24 1.032.428l.796-.797 1.415 1.415-.797.796c.188.318.333.665.428 1.032H21v2h-1.126c-.095.367-.24.714-.428 1.032l.797.796-1.415 1.415-.796-.797a3.979 3.979 0 0 1-1.032.428V20h-2v-1.126a3.977 3.977 0 0 1-1.032-.428l-.796.797-1.415-1.415.797-.796A3.975 3.975 0 0 1 12.126 16H11v-2h1.126c.095-.367.24-.714.428-1.032l-.797-.796 1.415-1.415.796.797A3.977 3.977 0 0 1 15 11.126V10h2Zm.406 3.578.016.016c.354.358.574.85.578 1.392v.028a2 2 0 0 1-3.409 1.406l-.01-.012a2 2 0 0 1 2.826-2.83ZM5 8a4 4 0 1 1 7.938.703 7.029 7.029 0 0 0-3.235 3.235A4 4 0 0 1 5 8Zm4.29 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h6.101A6.979 6.979 0 0 1 9 15c0-.695.101-1.366.29-2Z"
                  clipRule="evenodd"
                />
              </svg>

              <Link
                type="button"
                className="btn btn-outline font-semibold"
                to={"/AdminClientes"}
              >
                Administrar Clientes
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default Nav;
