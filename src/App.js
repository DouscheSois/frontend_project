import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import Search from "./components/Search";
import CovidMap from "./components/CovidMap";

import { scrollFunction } from "./helper/scrollFunction";

import Header from "./constant/Header";
import Footer from "./constant/Footer";
import ToTopButton from "./constant/ToTopButton";

// Send money to Peru with google youtube donation?

// Make 3 useEffects and combine them in one to create the illusion.

import { Container } from "react-bootstrap";

const App = () => {
  window.onscroll = function () {
    scrollFunction();
  };
  return (
    <Router>
      <Header />
      <main className="py-1">
        <Container>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/covid">
            <CovidMap />
          </Route>
        </Container>
      </main>
      <ToTopButton />
      <Footer />
    </Router>
  );
};

export default App;
