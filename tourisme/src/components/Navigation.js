import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  );
};
