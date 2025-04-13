import React, { useEffect, useState } from "react";
import "./compras.css";
import Nav from "../nav/nav";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Compras() {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [tipoCliente, setTipoCliente] = useState("");
  const [totalConDescuento, setTotalConDescuento] = useState(0);

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);

    const totalCalculado = carritoGuardado.reduce(
      (acc, item) => acc + item.valor,
      0
    );
    setTotal(totalCalculado);

    const idCliente = localStorage.getItem("cliente_id");

    if (idCliente) {
      fetch(`http://localhost/login-backend/obtenerTipoCliente.php?id=${idCliente}`)
        .then((res) => res.json())
        .then((data) => {
          const tipo = data.tipo_cliente;
          setTipoCliente(tipo);

          let descuento = 0;

          if (tipo === "Nuevo") {
            if (totalCalculado >= 250000) {
              descuento = 0.02;
            }
          } else if (tipo === "Casual") {
            descuento = 0.02;
            if (totalCalculado >= 200000) {
              descuento += 0.04;
            }
          } else if (tipo === "Permanente") {
            descuento = 0.04;
            if (totalCalculado >= 150000) {
              descuento += 0.06;
            }
          }

          const totalDescuento = totalCalculado - totalCalculado * descuento;
          setTotalConDescuento(totalDescuento);
        })
        .catch((err) => {
          console.error("Error al obtener tipo de cliente:", err);
        });
    }
  }, []);

  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

    const nuevoTotal = nuevoCarrito.reduce((acc, item) => acc + item.valor, 0);
    setTotal(nuevoTotal);
  };

  const pagarCarrito = () => {
    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    alert("¡Gracias por tu compra!");

    localStorage.removeItem("carrito");
    setCarrito([]);
    setTotal(0);
    setTipoCliente("");
    setTotalConDescuento(0);
  };

  return (
    <div className="container1">
      <Row>
        <Col md={2}>
          <Nav />
        </Col>

        <Col md={9}>
          <div className="ContenedorCompras">
            <h2>Compras</h2>

            <div>
              {carrito.length === 0 ? (
                <p>No hay productos en el carrito.</p>
              ) : (
                carrito.map((item, index) => (
                  <Card key={index} style={{ marginBottom: "1rem" }}>
                    <Card.Body>
                      <Card.Title>{item.titulo}</Card.Title>
                      <Card.Text>
                        Valor: ${item.valor.toLocaleString("es-CO")}
                      </Card.Text>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => eliminarDelCarrito(item.id)}
                      >
                        Eliminar
                      </Button>
                    </Card.Body>
                  </Card>
                ))
              )}
            </div>

            <section className="CalculoTotal">
              <h5>Subtotal:</h5>
              <p>${total.toLocaleString("es-CO")}</p>

              {tipoCliente && (
                <>
                  <h5>Tipo de cliente:</h5>
                  <p>{tipoCliente}</p>

                  <h5>Total con descuento:</h5>
                  <p>${totalConDescuento.toLocaleString("es-CO")}</p>
                </>
              )}
            </section>

            <br />
            <div>
              <Button variant="outline-primary" onClick={pagarCarrito}>
                Pagar
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Compras;
