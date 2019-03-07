import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return <h1 style={{ color: "#FF8C00" }}>Good {timeOfDay}!</h1>;
}

export default App;
