import React, { useEffect, useState } from "react";

import {
  Row,
  Col,
  Container,
  Badge,
  Jumbotron,
  Image,
  Navbar,
  Carousel,
  Spinner,
} from "react-bootstrap";

import RandomJokes from "./fetches/RandomJokes";

import Background from "../images/background.jpg";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const loaded = async () => {
        try {
          setLoading(true);
        } catch (err) {
          console.error(err.message);
        }
      };
      loaded();
    }, 500);
  }, []);

  return loading === false ? (
    <Spinner animation="grow" size="lg" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  ) : (
    <Row className="text-center">
      <Col>
        <Container>
          <h1 className="bg-light py-3">
            <Badge variant="dark">New</Badge> Chuck Norris joke of the day!
          </h1>
          <RandomJokes />
        </Container>
      </Col>
    </Row>
  );
};

export default Home;
