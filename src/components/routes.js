import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";

const Router = () => {
  return (
    <BrowserRouter basename="react-multiples">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
