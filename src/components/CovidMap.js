import React, { useState, useEffect } from "react";

import { Row, Col } from "react-bootstrap";

const CovidMap = () => {
  const [covid, setCovid] = useState([]);

  useEffect(() => {
    const fetchCovid = async () => {
      try {
        let res = await fetch(
          "https://coronavirus-map.p.rapidapi.com/v1/summary/latest",
          {
            method: "GET",
            headers: {
              "x-rapidapi-key":
                "03a03bbec7msh09a5ae7cba5c2dfp1dd869jsn5d2a2397efd0",
              "x-rapidapi-host": "coronavirus-map.p.rapidapi.com",
            },
          }
        );
        let data = await res.json();
        setCovid([data]);
        console.log(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchCovid();
  }, []);

  return (
    <>
      <Row>
        <Col>
          {covid.map((item, key) => (
            <p key={key}>{item.data.summary.critical}</p>
          ))}
        </Col>
      </Row>
    </>
  );
};
export default CovidMap;
