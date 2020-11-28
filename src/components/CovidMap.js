import React, { useState, useEffect } from "react";

import { Row, Col, Spinner, Navbar } from "react-bootstrap";

const CovidMap = () => {
  const [covid, setCovid] = useState([]);
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

  return loading === false ? (
    <Spinner animation="grow" size="lg" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  ) : (
    <>
      <Row className="text-center">
        <Col>
          {covid.map((item, key) => (
            <div key={key} className="my-1">
              <Navbar bg="danger" variant="dark">
                <Navbar.Brand>WorldWide</Navbar.Brand>
              </Navbar>
              <Navbar bg="light">
                <Navbar.Brand>Active cases:</Navbar.Brand>
                {item.data.summary.active_cases.toLocaleString()}
              </Navbar>
              <Navbar bg="light">
                <Navbar.Brand>Critical cases:</Navbar.Brand>
                {item.data.summary.critical.toLocaleString()}
              </Navbar>
              <Navbar bg="light">
                <Navbar.Brand># of deaths:</Navbar.Brand>
                {item.data.summary.deaths.toLocaleString()}
              </Navbar>
              <Navbar bg="light">
                <Navbar.Brand>Death ratio:</Navbar.Brand>
                {item.data.summary.death_ratio.toLocaleString("en", {
                  style: "percent",
                })}
              </Navbar>
              <Navbar bg="light">
                <Navbar.Brand># of recovered:</Navbar.Brand>
                {item.data.summary.recovered.toLocaleString()}
              </Navbar>
              <Navbar bg="light">
                <Navbar.Brand>Recovery ratio:</Navbar.Brand>
                {item.data.summary.recovery_ratio.toLocaleString("en", {
                  style: "percent",
                })}
              </Navbar>
              <Navbar bg="info" variant="dark">
                <Navbar.Brand>Total Cases:</Navbar.Brand>
                <Navbar.Brand>
                  {item.data.summary.total_cases.toLocaleString()}
                </Navbar.Brand>
              </Navbar>
            </div>
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          {covid.map((item, key) => (
            <div key={key} className="my-1">
              <Navbar bg="danger" variant="dark">
                <Navbar.Brand>USA</Navbar.Brand>
              </Navbar>
              <Navbar bg="light">
                <Navbar.Brand>Active cases:</Navbar.Brand>
                {item.data.regions.usa.active_cases.toLocaleString()}
              </Navbar>
              <Navbar bg="light">
                <Navbar.Brand>Active cases:</Navbar.Brand>
                {item.data.regions.usa.critical.toLocaleString()}
              </Navbar>
              <Navbar bg="light">
                <Navbar.Brand># of deaths:</Navbar.Brand>
                {item.data.regions.usa.deaths.toLocaleString()}
              </Navbar>
              <Navbar bg="light">
                <Navbar.Brand>Active cases:</Navbar.Brand>
                {item.data.regions.usa.death_ratio.toLocaleString("en", {
                  style: "percent",
                })}
              </Navbar>
              <Navbar bg="light">
                <Navbar.Brand># of recovered:</Navbar.Brand>
                {item.data.regions.usa.recovered.toLocaleString()}
              </Navbar>
              <Navbar bg="light">
                <Navbar.Brand>Recovery ratio:</Navbar.Brand>
                {item.data.regions.usa.recovery_ratio.toLocaleString("en", {
                  style: "percent",
                })}
              </Navbar>
              <Navbar bg="info" variant="dark">
                <Navbar.Brand>Total Cases:</Navbar.Brand>
                <Navbar.Brand>
                  {item.data.regions.usa.total_cases.toLocaleString()}
                </Navbar.Brand>
              </Navbar>
            </div>
          ))}
        </Col>
      </Row>
    </>
  );
};
export default CovidMap;
