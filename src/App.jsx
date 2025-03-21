// App.js
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./Pages/LandPage";
import About from "./Pages/About";
import Barang from "./Pages/Barang";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/barang" element={<Barang />} />
      </Routes>
    </Router>
  );
};

export default App;
