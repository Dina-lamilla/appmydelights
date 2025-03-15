import "./oServicios.css"
import Nav from "../nav/nav";


//bootstrap
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



//-----------------------------HOME----------------------------------

function OServicios() {
    return (
      <div className="container1">
        <Row>
          {/* Menú a la izquierda */}
          <Col md={2}>
          <Nav/>
          </Col>

          {/* Home a la derecha */}
          <Col md={9}>
            <div className="contenedorHome">
              <div className="textHome">
              <h2>OTROS SERVICIOS</h2>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      
    );
  }
  
  export default OServicios;