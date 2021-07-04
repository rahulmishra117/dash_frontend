import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container, Card, CardDeck,Form,Button } from "react-bootstrap";
function Openzone() {
  return (
    <div>
    <br></br><br></br><br></br><br></br>
      <Container>
        <Row>
          <Col >
            <CardDeck>
            <center>
              <Card className="Card-1">
              <center> 
                <Card.Img className="Card-img"
                  variant="top"
                  src="https://image.flaticon.com/icons/png/512/2345/2345337.png"
                />
                </center>
                <Card.Body>
                  <Card.Title>ADMIN</Card.Title>
                  <Card.Text>
                   

                      <Link to="/Admin">
                      <Button variant="outline-primary" type="submit">
                        ADMIN PANNEL
                      </Button></Link>
                    
                  </Card.Text>
                </Card.Body>
              </Card>
              </center>
            </CardDeck>
          </Col>
          <Col>
          <CardDeck>
          <center>
          <Card className="Card-1" >
          <center>
          <Card.Img className="Card-img"
              variant="top"
              src="https://image.flaticon.com/icons/png/512/2345/2345337.png"
            />
            </center> 
            <Card.Body>
              <Card.Title>USER</Card.Title>
              <Card.Text>
               

                  <Link to="/User">
                  <Button variant="outline-primary" type="submit">
                    USER PANNEL
                  </Button></Link>
                
              </Card.Text>
            </Card.Body>
          </Card>
          </center>
        </CardDeck>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Openzone;
