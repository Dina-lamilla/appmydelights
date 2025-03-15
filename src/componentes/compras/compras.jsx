import React from "react";
import "./compras.css"
import Nav from "../nav/nav"
import CardCompra from "../../card/card";
import {pComprasInfo} from "../../global/PComprasInfo"  
import { Button } from "react-bootstrap";

//bootstrap

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Compras(){
    return(
        <div className="container1">
        <Row>
          {/* Menú a la izquierda */}
          <Col md={2}>
          <Nav/>
          </Col>

          {/*------------------------- COMPRAS------------------------- */}
          <Col md={9}>
            <div className="ContenedorCompras">
              <h2>Compras</h2>

              {/**! ESTAMOS RECORRIENDO UN ARRIVE (ESTE SE ENCUENTRA EN GLOBAL)!! */}
              <div flush>
                {pComprasInfo.map((info, index) =>{
                    return(
                        <>
                        <CardCompra pComprasInfo={info} eventKey={index} />
                        <br/>
                        </>
                    )
                })}
              </div> {/**! Cierra div pComprasInfo !! */}


                <section className="CalculoTotal">
                    <h5>Sub Total: </h5>
                    <p> $5.000</p>
                </section><br/>

                <div>
                    <Button variant="outline-primary">Pagar</Button>
                </div>

            </div> {/**! Cierra div ContenedorCompras !! */}
          </Col>
        </Row>
      </div>
    );
}
export default Compras;