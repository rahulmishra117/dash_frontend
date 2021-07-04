import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Row,
  Container,
  Col,
  Modal,
  Card,
  CardDeck,
  Button,
  Tab,
  Tabs,
  Spinner
} from "react-bootstrap";

function Request() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <br></br>
      <br></br>
      <Card>
        <Card.Body>
          <Card.Text>
            <Container>
              <Row>
                <Col>AmitKumar@123.com</Col>
                <Col>AmitKumar</Col>
              </Row>
            </Container>
          </Card.Text>
          <Button
            className="button-val"
            variant="outline-primary"
            onClick={handleShow}
          >
            ACCEPT
          </Button>
          <Button className="button-val" variant="outline-danger">
            DECLINE
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
            <center>
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
              </center>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                ACCEPT
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Request;
