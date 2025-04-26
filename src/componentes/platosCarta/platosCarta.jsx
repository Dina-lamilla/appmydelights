import "./platosCarta.css";
import Nav from "../nav/nav";

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {CardPlatosCartaInfo} from "../../global/CardPlatosCartaInfo"
import CardPlatosCarta from "../../card/cardPlatosCarta" 


//-----------------------------HOME----------------------------------

function PlatosCarta() {
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
          <h1>Platos a la carta</h1><br/>
            {/*------------------------- CARD PLATILLOS------------------------- */}
            <div className="CardPlatosCStyle">
              {CardPlatosCartaInfo.map((info, index)=>{
                return(
                  <CardPlatosCarta CardPlatosCartaInfo={info} eventKey={index} />
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

export default PlatosCarta;
