import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import data from "../../data";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, Row, Col, Container } from "react-bootstrap";
import PropsTypes from "prop-types";
// import {setShowFavourites } from "../actions";
 

function Member() {
  const datas = [
    [ "rahu@12.com",  "Rahul"],
    ["amit@12.com", "Amit"],
    ["amitkit@122.com", "amitkit"],
    ["rahul@12.com", "rahul"],
    ["anmol@132.com", "anmol"],
    ["adtiya@34.com", "adtiya"],

  ];


    return (
      <div>
        <br></br>

        <ListGroup>
          <ListGroup.Item variant="secondary">
            <Container>
              <Row className="post-col">
              {datas.slice(1, datas.length).map((item, index) => {
                return (
                  <Container>
                  <Row>
                  <Col>{item[0]}</Col>
                  <Col>{item[1]}</Col>
                  <Col>{item[2]}</Col>
                </Row>
              </Container>
                  
                );
              })}
              </Row>
            </Container>
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }


export default Member;
