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

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);

    const totalCalculado = carritoGuardado.reduce(
      (acc, item) => acc + item.valor,
      0
    );
    setTotal(totalCalculado);
  }, []);

  /* función para eliminar un producto */

  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

    const nuevoTotal = nuevoCarrito.reduce((acc, item) => acc + item.valor, 0);
    setTotal(nuevoTotal);
  };

  /* función pagarCarrito*/
  const pagarCarrito = () => {
    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    alert("¡Gracias por tu compra!");

    localStorage.removeItem("carrito");
    setCarrito([]);
    setTotal(0);
  };

  return (
    <div className="container1">
      <Row>
        {/* Menú a la izquierda */}
        <Col md={2}>
          <Nav />
        </Col>

        {/*------------------------- COMPRAS------------------------- */}
        <Col md={9}>
          <div className="ContenedorCompras">
            <h2>Compras</h2>
            {/**! ESTAMOS RECORRIENDO UN ARRIVE (ESTE SE ENCUENTRA EN GLOBAL)!! */}
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
            {/**! Cierra div pComprasInfo !! */}

            <section className="CalculoTotal">
              <h5>Subtotal:</h5>
              <p>${total.toLocaleString("es-CO")}</p>
            </section>

            <br />
            <div>
              <Button variant="outline-primary" onClick={pagarCarrito}>
                Pagar
              </Button>
            </div>
          </div>
          {/**! Cierra div ContenedorCompras !! */}
        </Col>
      </Row>
    </div>
  );
}
export default Compras;
