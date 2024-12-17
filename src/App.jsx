import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SectionTwo from "./components/SectionTwo";
import Hero from "./components/Hero";
import LatestTrends from "./components/LatestTrends";
import MyFeedback from "./components/MyFeedback";
import RecentActivities from "./components/RecentActivities";

function App() {
  return (
    <>
      <Navbar />
      <SectionTwo />
      <Hero />
      <LatestTrends />
      <MyFeedback />
      <RecentActivities />
    </>
  );
}

export default App;
