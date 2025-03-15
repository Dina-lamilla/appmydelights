import "./comida.css";
import Nav from "../nav/nav";

//bootstrap
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import {CardPlatosCInfo} from "../../global/CardPlatosC"
import CardPlatosC from "../../card/cardPlatosC"

import { Link } from "react-router-dom";

//-----------------------------HOME----------------------------------

function ComidaC() {
  return (
    <div className="container1">
      <Row>
        {/* Menú a la izquierda */}
        <Col md={2}>
          <Nav />
        </Col>

        {/* Home a la derecha */}
        <Col md={9}>
          <div className="ContenedorComidaC">
          <h4>Comida Corriente</h4><br/>
            {/*------------------------- CARD PLATILLOS------------------------- */}
            <div className="CardPlatosCStyle">
              {CardPlatosCInfo.map((info, index)=>{
                return(
                  <>
                  <CardPlatosC CardPlatosCInfo={info} eventKey={index} />
                  </>
                )
              })}

            </div>
            {/* Cierr div Card Sopas */}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ComidaC;
