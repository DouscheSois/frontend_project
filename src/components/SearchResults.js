import React, { useState } from "react";

import { Container, Spinner } from "react-bootstrap";

const SearchResults = ({ result }) => {
  const [loading, setLoading] = useState(false);

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

  //works the first time but not the other continuous searches

  return loading === false ? (
    <Spinner animation="grow" size="lg" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  ) : (
    <Container className="my-4 p-4 bg-light">
      <p>{result.value}</p>
    </Container>
  );
};

export default SearchResults;
