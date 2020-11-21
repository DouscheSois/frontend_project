import React from "react";

import { Row, Col, Navbar, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Navbar className="py-4">
        <Container>
          <Navbar.Brand href="/">Chuck Norris International</Navbar.Brand>
          <Navbar.Text>
            Check Portfolio: <a href="#!">Douschesois</a>
          </Navbar.Text>
        </Container>
      </Navbar>
    </footer>
  );
};

export default Footer;
