import React from "react";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CardPlatosC({CardPlatosCInfo, eventKey}){
    return(
        <Card eventKey={eventKey.toString()} style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={CardPlatosCInfo.imagen}
                  text="Sopa de verduras"
                  alt=""
                />
                <Card.Body>
                  <Card.Title>{CardPlatosCInfo.tutulo}</Card.Title>
                  <Card.Text>
                    {CardPlatosCInfo.descripcion}<br/><br/>
                    <h5>Ingredientes Principales</h5>
                    {CardPlatosCInfo.Ingredientes}<br/><br/>

                    Valor= {CardPlatosCInfo.valor}

                  </Card.Text> 
                  <Link
                    type="button"
                    className="btn btn-primary font-semibold"
                    to={"/compras"}
                  >
                    Comprar
                  </Link>
                </Card.Body>
              </Card>
    
    );
}
export default CardPlatosC;