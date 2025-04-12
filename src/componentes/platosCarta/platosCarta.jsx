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
    <div className="container1">
      <Row>
        {/* Menú a la izquierda */}
        <Col md={2}>
          <Nav />
        </Col>

        {/* Home a la derecha */}
        <Col md={9}>
          <div className="ContenedorComidaC">
          <h4>Platos a la carta</h4><br/>
            {/*------------------------- CARD PLATILLOS------------------------- */}
            <div className="CardPlatosCStyle">
              {CardPlatosCartaInfo.map((info, index)=>{
                return(
                  <>
                  <CardPlatosCarta CardPlatosCartaInfo={info} eventKey={index} />
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

export default PlatosCarta;
