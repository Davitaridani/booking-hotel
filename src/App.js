import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/sass/main.css";
import NavbarCompt from "./components/NavbarCompt";
import Herro from "./components/sections/Herro";
import Meet from "./components/sections/Meet";
import About from "./components/sections/About";
import Schedule from "./components/sections/Schedule";
import Speakers from "./components/sections/Speakers";
import Event from "./components/sections/Event";
import Vanue from "./components/sections/Vanue";
import Sponsor from "./components/sections/Sponsor";
import Footer from "./components/sections/Footer";
import Gallery from "./components/sections/Gallery";

const App = () => {
  return (
    <Router>
      <NavbarCompt />
      <Herro />
      <Meet />
      <About />
      <Schedule />
      <Speakers />
      <Event />
      <Vanue />
      <Sponsor />
      <Gallery />
      <Footer />
    </Router>
  );
};

export default App;
