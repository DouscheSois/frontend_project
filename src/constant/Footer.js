import React from "react";

import { Row, Col, Navbar, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-info py-4">
      <Container>
        <Row>
          <Col className="text-center my-4">
            <Navbar.Brand href="/">
              Chuck Norris International Limited Liability Co.
            </Navbar.Brand>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Navbar.Text>
              Made by: <a href="https://www.douschesois.com/">Douschesois</a>
            </Navbar.Text>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
