import React from "react";

import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function CardPlatosC({ CardPlatosCInfo, eventKey }) {
  const navigate = useNavigate();

  const agregarAlCarrito = () => {
    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];

    // Creamos el producto a agregar
    const producto = {
      id: CardPlatosCInfo.id,
      titulo: CardPlatosCInfo.titulo,
      valor: CardPlatosCInfo.valor,
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
        src={`${process.env.PUBLIC_URL}${CardPlatosCInfo.imagen}`}
        text="Sopa de verduras"
        alt={CardPlatosCInfo.titulo}
      />
      <Card.Body>
        <Card.Title>{CardPlatosCInfo.titulo}</Card.Title>
        <Card.Text>
          {CardPlatosCInfo.descripcion}
          <br />
          <br />
          <h5>Ingredientes Principales</h5>
          {CardPlatosCInfo.ingredientes}
          <br />
          <br />
          Valor: ${CardPlatosCInfo.valor.toLocaleString("es-CO")}
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
export default CardPlatosC;
