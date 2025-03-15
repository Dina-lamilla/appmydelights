import "./home.css"
import Nav from "../nav/nav";


//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";



//-----------------------------HOME----------------------------------

function Home() {
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
              <h2>ORDENA TU</h2>
              <h5>COMIDA FAVORITA</h5>
              <Link
                    type="button"
                    className="btn btn-primary font-semibold"
                    to={"/PlatosCarta"}
                  >
                    Menú
                  </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      
    );
  }
  
  export default Home;
  