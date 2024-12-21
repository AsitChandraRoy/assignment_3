import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Home } from "./components/HomePage/Home";
import Footer from "./components/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BestRestaurants from "./components/BestRestaurant/BestRestaurants";
import BellaItalia from "./components/BellaItalia/BellaItalia";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/best" element={<BestRestaurants />} />
          <Route path="/bella" element={<BellaItalia />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
