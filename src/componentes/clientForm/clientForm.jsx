import "./clientForm.css";
import Nav from "../nav/nav";

//bootstrap
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

//-----------------------------HOME----------------------------------

function ClientForm() {
  return (
    <div>
      <Row>
        {/* Menú a la izquierda */}
        <Col md={2}>
          <Nav />
        </Col>

        {/* ----------------------------------------FORMULARIO a la derecha------------------------------------------------------------- */}

        <Col md={9}>
          <div className="contenedorFormulario">
            <Form className="FormularioRegistro">
              <h5>Formulario De Registro</h5>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formRegistroUser"
                >
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    type="text"
                    name="usuario"
                    placeholder="Ingrese su usuario"
                  />
                  <Form.Text>
                    Ingresa tu nombre de usuario. Asegúrate de que tenga entre 4
                    y 16 caracteres.
                  </Form.Text>
                </Form.Group>

                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formRegistroCedula"
                >
                  <Form.Label>Número de cedula</Form.Label>
                  <Form.Control
                    type="number"
                    name="Número de cedula"
                    placeholder="Ingrese su Número de cedula"
                  />
                  <Form.Text>
                    Asegúrate de ingresar tu número de cédula correctamente para
                    validar tu identidad.
                  </Form.Text>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formRegistroGenero"
                >
                  <Form.Label>Genero</Form.Label>

                  <Form.Select aria-label="Default select example">
                    <option>Selecionar Genero</option>
                    <option value="1">Femenino</option>
                    <option value="2">Masculino</option>
                    <option value="3">Prefiero No Decirlo</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formRegistroFechaNacimiento"
                >
                  <Form.Label>Fecha De Nacimiento</Form.Label>
                  <Form.Control type="date" name="Fecha De Nacimiento" />
                  <Form.Text>
                    Ingresa tu fecha de nacimiento en el formato correcto.
                  </Form.Text>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formRegistroDireccion"
                >
                  <Form.Label>Dirección de Residencia</Form.Label>
                  <Form.Control placeholder="Ejem: carrerra 55b # " />
                  <Form.Text>Ingresa tu dirección de residencia.</Form.Text>
                </Form.Group>

                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formRegistroTelefono"
                >
                  <Form.Label>Teléfono Celular</Form.Label>
                  <Form.Control
                    type="number"
                    name="Teléfono Celular"
                    placeholder="Ingrese su Teléfono Celular"
                  />
                </Form.Group>
              </Row>

              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formRegistroCorreo"
              >
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="e-mail"
                  name="Correo Electrónico"
                  placeholder="@example.com"
                />
              </Form.Group>

              <Form.Check aria-label="option 1" label="Acepto terminos y condiciones" /><br/>

              <div className="BotonesFormulario">
                <Button variant="primary" size="mg" active>
                  Enviar
                </Button>
                <Button variant="none" size="mg" active>
                  Volver
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ClientForm;
