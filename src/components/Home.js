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

import Background from "../images/background.jpg";

const Home = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        let res = await fetch(
          "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              "x-rapidapi-key":
                "03a03bbec7msh09a5ae7cba5c2dfp1dd869jsn5d2a2397efd0",
              "x-rapidapi-host":
                "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
            },
          }
        );
        let data = await res.json();
        setJokes([data]);
        setLoading(true);
        console.log(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchJokes();
  }, []);

  // Use another useEffect to load another joke?

  // <Jumbotron className="jumbotron" key={key} fluid>
  //   <Image src={item.icon_url} alt="icon" />
  //   <p className="random-joke">{item.value}</p>
  // </Jumbotron>

  return (
    <Row className="text-center">
      <Col>
        <Container>
          <h1 className="bg-light py-3">
            <Badge variant="dark">New</Badge> Chuck Norris joke of the day!
          </h1>
          <Spinner animation="grow" />
          {jokes.map((item, key, loading) => (
            <Carousel key={key}>
              <Carousel.Item>
                <img
                  className="d-block w-100 opac"
                  src={Background}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h2>
                    <Image src={item.icon_url} alt="icon" />
                  </h2>
                  <p className="xl-font">{item.value}</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 opac"
                  src={Background}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h2>
                    <Image src={item.icon_url} alt="icon" />
                  </h2>
                  <p className="xl-font">{item.value}</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 opac"
                  src={Background}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h2>
                    <Image src={item.icon_url} alt="icon" />
                  </h2>
                  <p className="xl-font">{item.value}</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          ))}
        </Container>
      </Col>
    </Row>
  );
};

export default Home;
