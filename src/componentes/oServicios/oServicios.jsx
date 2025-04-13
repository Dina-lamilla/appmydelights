import "./oServicios.css";
import Nav from "../nav/nav";

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {OtrosServiciosInfo} from "../../global/otrosServiciosInfo"
import CardOtrosServicios from "../../card/cardOtrosServicios" 


//-----------------------------HOME----------------------------------

function OServicios() {
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
          <h4>Otros Servicios</h4><br/>
            {/*------------------------- CARD PLATILLOS------------------------- */}
            <div className="CardPlatosCStyle">
              {OtrosServiciosInfo.map((info, index)=>{
                return(
                  <>
                  <CardOtrosServicios OtrosServiciosInfo={info} eventKey={index} />
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

export default OServicios;
