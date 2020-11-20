import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";

import Matt from "./images/matt.jpg";

import { Container, Image } from "react-bootstrap";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </main>
    </Router>
  );
};

export default App;
