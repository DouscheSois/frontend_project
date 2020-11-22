import React, { useEffect, useState } from "react";

import { Carousel, Image } from "react-bootstrap";

import Background from "../../images/background.jpg";

const RandomFetchTwo = () => {
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
    <>
      {jokes.map((item, key) => (
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
    </>
  );
};

export default RandomFetchTwo;
