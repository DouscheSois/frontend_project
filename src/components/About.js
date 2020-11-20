import React from "react";

import {
  Container,
  Card,
  Figure,
  Jumbotron,
  Row,
  Col,
  Image,
  Button,
} from "react-bootstrap";

import Matt2 from "../images/matt2.jpg";
import Matt3 from "../images/matt3.jpg";

const About = () => {
  return (
    <Row>
      <Col md={12} lg={6} className="text-center bg-secondary">
        <Figure>
          <Figure.Image alt="matt" src={Matt3} />
          <Figure.Caption>
            Matthew White Ridley is a British journalist and businessman. He is
            best known for his writings on science, the environment, and
            economics.
          </Figure.Caption>
          <Button variant="primary">Go somewhere</Button>
        </Figure>
      </Col>
      <Col md={12} lg={6} className="text-center bg-secondary">
        <Figure>
          <Figure.Image alt="matt2" src={Matt2} />
          <Figure.Caption>
            Here is a highlighted answer to the question. He defines it very
            well and to the point.
          </Figure.Caption>
          <Button variant="primary">Go somewhere</Button>
        </Figure>
      </Col>
    </Row>
  );
};

export default About;
