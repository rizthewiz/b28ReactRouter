import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="container">
      <div id="navbar">
        <nav>
          <Link to="/red">Red</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/">Home</Link>
        </nav>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
