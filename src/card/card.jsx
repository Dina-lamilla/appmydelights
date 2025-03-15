import React from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function CardCompra({pComprasInfo, eventKey}){
    return(
        <Row eventKey={eventKey.toString()}>
            <Col mb={10}>
                <Card.Body>
                    <Card.Text>
                        {pComprasInfo.producto}
                        <br/>
                        Valor: {pComprasInfo.valor}
                    </Card.Text>
                </Card.Body>
            </Col>
            <Col mb={2}>
                <Card.Img variant="center" src="holder.js/1000px1800" />
            </Col><br/>

        </Row>
    
    );
}
export default CardCompra;