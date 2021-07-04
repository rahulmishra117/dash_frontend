import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Jumbotron,Button} from 'react-bootstrap';

function Body() {
  return (
    <div>
      <Jumbotron className="Jumbo">
        <h1>GREEN BORD LEARNING</h1>
        <p>
         HELP TO LEARM DIGITALY..
        </p>
        <p>
          <Button variant="danger">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
}
export default Body;
