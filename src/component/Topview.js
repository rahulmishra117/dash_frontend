import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar,Form,FormControl,Button} from 'react-bootstrap';
import './common.css'
import Body from "./Body";

 function Topview() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
      <Link to="/"> <Navbar.Brand > GreenBord</Navbar.Brand></Link>
        <Nav className="mr-auto">
          
        </Nav>
        <Form inline>
          <Link to="/Openzone">
          <Button variant="outline-light">OPEN</Button></Link>
        </Form>
      </Navbar>
      

    </div>
  );
}
export default Topview;