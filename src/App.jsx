import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SectionTwo from "./components/SectionTwo";
import Hero from "./components/Hero";
import LatestTrends from "./components/LatestTrends";

function App() {
  return (
    <>
      <Navbar />
      <SectionTwo />
      <Hero />
      <LatestTrends />
    </>
  );
}

export default App;
