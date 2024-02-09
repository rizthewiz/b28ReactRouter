import { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Red from "./Red";

function Blue() {
  const [count, setCount] = useState(0);

  return (
    <div className="blue">
      <div id="navbar">
        <h1>Blue</h1>
      </div>
    </div>
  );
}

export default Blue;
