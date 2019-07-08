import React from "react";
import "./nav-bar.css";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="navigation">
      <Link className="nav-tag" to="/">
        Home
      </Link>
      <Link className="nav-tag" to="/about">
        About
      </Link>
      <Link className="nav-tag" to="/contact">
        Contact Us
      </Link>
    </div>
  );
};
