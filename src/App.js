import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

import Header from "./constant/Header";
import Footer from "./constant/Footer";

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
      <Footer />
    </Router>
  );
};

export default App;
