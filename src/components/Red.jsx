import { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Blue from "./Blue";

function Red() {
  const [count, setCount] = useState(0);

  return (
    <div className="blue">
      <div id="navbar">
        <h1>Red</h1>
      </div>
    </div>
  );
}

export default Red;
