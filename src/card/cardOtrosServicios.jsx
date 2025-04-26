import React from "react";

import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function CardOtrosServicios({ OtrosServiciosInfo, eventKey }) {
  const navigate = useNavigate();

  const agregarAlCarrito = () => {
    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];

    // Creamos el producto a agregar
    const producto = {
      id: OtrosServiciosInfo.id,
      titulo: OtrosServiciosInfo.titulo,
      valor: OtrosServiciosInfo.valor,
    };

    // Agregamos el producto y actualizamos el localStorage
    localStorage.setItem(
      "carrito",
      JSON.stringify([...carritoActual, producto])
    );

    // Redirigimos al carrito
    navigate("/compras");
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`${process.env.PUBLIC_URL}${OtrosServiciosInfo.imagen}`}
        text={OtrosServiciosInfo.titulo}
        alt={OtrosServiciosInfo.titulo}
        loading="lazy"
      />
      <Card.Body>
        <Card.Title>{OtrosServiciosInfo.titulo}</Card.Title>
        <Card.Text>
          {OtrosServiciosInfo.descripcion}
          <br />
          <br />
          <br />
          Valor: ${OtrosServiciosInfo.valor.toLocaleString("es-CO")}
        </Card.Text>
        <button
          type="button"
          className="btn btn-primary font-semibold"
          onClick={agregarAlCarrito}
        >
          Comprar
        </button>
      </Card.Body>
    </Card>
  );
}
export default CardOtrosServicios;
