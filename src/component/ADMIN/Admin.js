import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardDeck, Button, Tab, Tabs } from "react-bootstrap";
import AdminForm from "./AdminForm";
import Member from "./Member";
import Pending from "./Pending";
function Admin() {
  return (
    <div>
    <center><h1>ADMIN</h1></center>
    <center>
      <Card className="Comman-card">
        <Card.Body>
          <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="home" title="ADD MEMBER">
                <br></br>
                <AdminForm />
              </Tab>
              <Tab eventKey="profile" title="PendingInvites">
              <Pending/>
              </Tab>
              <Tab eventKey="contact" title="InstituteMember">
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
export default Admin;
