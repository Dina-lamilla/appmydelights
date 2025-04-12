import React from "react";

import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function CardPlatosCarta({ CardPlatosCartaInfo, eventKey }) {
  const navigate = useNavigate();

  const agregarAlCarrito = () => {
    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];

    // Creamos el producto a agregar
    const producto = {
      id: CardPlatosCartaInfo.id,
      titulo: CardPlatosCartaInfo.titulo,
      valor: CardPlatosCartaInfo.valor,
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
        src={`${process.env.PUBLIC_URL}${CardPlatosCartaInfo.imagen}`}
        text="Sopa de verduras"
        alt={CardPlatosCartaInfo.titulo}
      />
      <Card.Body>
        <Card.Title>{CardPlatosCartaInfo.titulo}</Card.Title>
        <Card.Text>
          {CardPlatosCartaInfo.descripcion}
          <br />
          <br />
          <h5>Ingredientes Principales</h5>
          {CardPlatosCartaInfo.ingredientes}
          <br />
          <br />
          Valor: ${CardPlatosCartaInfo.valor.toLocaleString("es-CO")}
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
export default CardPlatosCarta;
