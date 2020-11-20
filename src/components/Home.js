import React from "react";

import Matt from "../images/matt.jpg";

import { Row, Col, Image } from "react-bootstrap";

const Home = () => {
  return (
    <Row>
      <Col>
        <Image width="auto" src={Matt} fluid />
      </Col>
    </Row>
  );
};

export default Home;
