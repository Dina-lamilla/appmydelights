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
      <main className="container1">
        <Row>
          {/* Menú a la izquierda */} 
          <Col md={2} as="aside">
          <Nav/>
          </Col>

          {/* Home a la derecha */}
          <Col md={10} as="aside">
            <section className="contenedorHome">
              <div className="textHome"> 
              <h1>ORDENA TU <br/>COMIDA FAVORITA</h1>
              <Link
                    type="button"
                    className="btn btn-primary font-semibold"
                    to={"/PlatosCarta"}
                  >
                    Menú
                  </Link>
              </div>
            </section>
            <div className="footer">
            <Footer/>
            </div>
          </Col>
        </Row>
      </main>
      
    );
  }
  
  export default Home;
  