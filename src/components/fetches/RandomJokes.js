import React, { useEffect, useState } from "react";

import { Carousel, Image, Badge } from "react-bootstrap";

import Background from "../../images/background.jpg";

const RandomJokes = () => {
  const [jokes1, setJokes1] = useState([]);
  const [jokes2, setJokes2] = useState([]);
  const [jokes3, setJokes3] = useState([]);

  useEffect(() => {
    const fetchJokes1 = async () => {
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
        setJokes1([data]);
        console.log(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    const fetchJokes2 = async () => {
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
        setJokes2([data]);
        console.log(data);
      } catch (err) {
        console.error(err.message);
      }
    };

    const fetchJokes3 = async () => {
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
        setJokes3([data]);
        console.log(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchJokes1();
    fetchJokes2();
    fetchJokes3();
  }, []);

  return (
    <Carousel>
      {jokes1.map((item, key) => (
        <Carousel.Item key={key}>
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
      ))}
      {jokes2.map((item, key) => (
        <Carousel.Item key={key}>
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
      ))}
      {jokes3.map((item, key) => (
        <Carousel.Item key={key}>
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
      ))}
    </Carousel>
  );
};

export default RandomJokes;
