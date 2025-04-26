import "./comida.css";
import Nav from "../nav/nav"; 

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {CardPlatosCInfo} from "../../global/CardPlatosC"
import CardPlatosC from "../../card/cardPlatosC"

//-----------------------------HOME----------------------------------

function ComidaC() {
  return (
    <main className="container1">
      <Row>
        {/* Menú a la izquierda */}
        <Col md={2} as="aside">
          <Nav />
        </Col>

        {/* Home a la derecha */}
        <Col md={9} as="aside">
          <section className="ContenedorComidaC">
          <h1>Comida Corriente</h1><br/>
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
          </section>
        </Col>
      </Row>
    </main>
  );
}

export default ComidaC;
