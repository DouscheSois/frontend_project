import React, { useEffect, useState } from "react";

import { Row, Col, Container, Badge, Jumbotron, Image } from "react-bootstrap";

const Home = () => {
  const [jokes, setJokes] = useState([]);
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
        console.log(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchJokes();
  }, []);

  return (
    <Row className="text-center">
      <Col>
        <Container>
          <h1>
            <Badge variant="secondary">New Chuck Norris Joke Of The Day</Badge>
          </h1>
          {jokes.map((item, key) => (
            <Jumbotron className="jumbotron" key={key} fluid>
              <Image src={item.icon_url} alt="icon" />
              <p className="random-joke">{item.value}</p>
            </Jumbotron>
          ))}
        </Container>
      </Col>
    </Row>
  );
};

export default Home;
