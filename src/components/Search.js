import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Form,
  FormControl,
  Button,
  Card,
  Jumbotron,
} from "react-bootstrap";

import bio1 from "../images/bio1.jpg";
import gallery1 from "../images/gallery1.jpg";
import lorem1 from "../images/lorem1.jpg";
import news1 from "../images/news1.jpg";

const Search = () => {
  const [joke, setJoke] = useState([]);
  const [query, setQuery] = useState("");

  const scrollFunction = () => {
    let buttoncss = document.getElementById("buttoncss");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      buttoncss.style.display = "block";
    } else {
      buttoncss.style.display = "none";
    }
  };

  window.onscroll = function () {
    scrollFunction();
  };

  const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  const newSearch = async () => {
    if (query === "") {
      return;
    }
    try {
      let res = await fetch(
        `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search?query=${query}`,
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
      setJoke(data.result);
      setQuery("");
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <Row className="text-center">
        <Col>
          <Container>
            <Jumbotron className="text-center my-4">
              <h3>
                Chuck Norris never sleeps so search for a fresh joke below
              </h3>
              <Form>
                <FormControl
                  type="text"
                  placeholder="What Category? eg. food, money, celebrity, movie, science, animal, history"
                  className="mr-sm-2"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Button
                  variant="outline-primary"
                  className="my-1"
                  onClick={newSearch}
                >
                  Search New Joke
                </Button>
              </Form>
              {joke.map((item, key) => (
                <Container key={key} className="my-4 p-4 bg-light">
                  <p>{item.value}</p>
                </Container>
              ))}
            </Jumbotron>
            <Button variant="outline-danger" onClick={toTop} id="buttoncss">
              Top
            </Button>
          </Container>
        </Col>
      </Row>
      <Row className="text-center my-1">
        <Col sm={12} md={12} lg={4}>
          <Card>
            <Card.Img variant="top" src={bio1} alt="bio1" />
            <Card.Body>
              <Card.Title>Biography</Card.Title>
              <Button
                variant="primary"
                href="https://en.wikipedia.org/wiki/Chuck_Norris"
              >
                Go Read More!
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4}>
          <Card>
            <Card.Img variant="top" src={news1} alt="bio1" />
            <Card.Body>
              <Card.Title>Latest News</Card.Title>

              <Button
                variant="primary"
                href="https://www.google.com/search?biw=1440&bih=798&tbm=nws&sxsrf=ALeKk03hosKdpkY4EuGcwuhi9d_LXNwigA%3A1606335799603&ei=N72-X8qrJIja-gT_r6nQCA&q=chuck+norris&oq=chuck+norris&gs_l=psy-ab.3..0l10.665.2165.0.2301.12.8.0.3.3.0.272.988.1j1j3.5.0....0...1c.1.64.psy-ab..5.7.785...0i433k1.0.HtvNEYuG6bM"
              >
                Go Read More!
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4}>
          <Card>
            <Card.Img variant="top" src={gallery1} alt="gallery1" />
            <Card.Body>
              <Card.Title>Gallery</Card.Title>

              <Button
                variant="primary"
                href="https://www.gettyimages.com/photos/chuck-norris?family=editorial&phrase=chuck%20norris&sort=mostpopular"
              >
                Go See More!
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="text-center">
        <Col sm={12} md={12} lg={4}>
          <Card>
            <Card.Img variant="top" src={lorem1} alt="bio1" />
            <Card.Body>
              <Card.Title>Ipsum Lorem</Card.Title>

              <Button
                variant="primary"
                href="https://en.wikipedia.org/wiki/Chuck_Norris"
              >
                Go Read More!
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4}>
          <Card>
            <Card.Img variant="top" src={lorem1} alt="bio1" />
            <Card.Body>
              <Card.Title>Ipsum Lorem</Card.Title>

              <Button
                variant="primary"
                href="https://en.wikipedia.org/wiki/Chuck_Norris"
              >
                Go Read More!
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4}>
          <Card>
            <Card.Img variant="top" src={lorem1} alt="bio1" />
            <Card.Body>
              <Card.Title>Ipsum Lorem</Card.Title>

              <Button variant="primary">Go See More!</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Search;
