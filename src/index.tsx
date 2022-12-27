import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Navbar from "./Navbar";
import HeroSection from "./Hero";


function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
