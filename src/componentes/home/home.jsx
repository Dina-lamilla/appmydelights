import "./home.css"
import Nav from "../nav/nav";
import Footer from "../footer/footer.jsx";


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
          <Col md={10}>
            <div className="contenedorHome">
              <div className="textHome"> 
              <h2>ORDENA TU</h2>
              <p>COMIDA FAVORITA</p>
              <Link
                    type="button"
                    className="btn btn-primary font-semibold"
                    to={"/PlatosCarta"}
                  >
                    Menú
                  </Link>
              </div>
            </div>
            <div className="footer">
            <Footer/>
            </div>
          </Col>
        </Row>
      </div>
      
    );
  }
  
  export default Home;
  