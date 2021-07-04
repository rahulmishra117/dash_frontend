import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardDeck, Button, Tab, Tabs } from "react-bootstrap";
import Member from "../ADMIN/Member";
import Request from "./Request";

function User() {
  return (
    <div>
    <center><h1>USER</h1></center>
    <center>
      <Card className="Comman-card">
        <Card.Body>
          <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
               <Tab eventKey="profile" title="PendingAccept">
               
               <Request/>
               </Tab>
              <Tab eventKey="contact" title="InsituteMember">
              <Member/>
              </Tab>
            </Tabs>
          </div>
        </Card.Body>
      </Card>
      </center>
    </div>
  );
}
export default User;
