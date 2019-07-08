import React from "react";
import "./App.css";

import { About } from "./components/About";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h3>Moroccan Tourisme</h3>
      <div className="nav-bar">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </div>
  );
}

export default App;
