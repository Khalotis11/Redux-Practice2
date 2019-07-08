import React from "react";
import "./App.css";

import { About } from "./components/About";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <h3>
          Moroccan | <span className="tourisme">Tourisme</span>
        </h3>
        <Navigation />
      </div>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </div>
  );
}

export default App;
