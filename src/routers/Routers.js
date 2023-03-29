import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/sections/About";
import Home from "../components/sections/Herro";
import Destination from "../components/sections/Schedule";
import Gallery from "../components/sections/Gallery";
import Blog from "../components/sections/Blog";
import Meet from "../components/sections/Meet";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meet" element={<Meet />} />
      <Route path="/about" element={<About />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default Router;
