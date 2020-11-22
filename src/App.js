import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

import Header from "./constant/Header";
import Footer from "./constant/Footer";

// Send money to Peru with google youtube donation?

// Make 3 useEffects and combine them in one to create the illusion.

import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-1">
        <Container>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
