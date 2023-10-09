import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Test from "./components/Test";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Testimonial />
      <Test />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
