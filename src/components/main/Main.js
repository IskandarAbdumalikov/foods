import React from "react";
import Hero from "../hero/Hero";
import Products from "../products/Products";
import Featured from "./pages/Featured";
import About from "./pages/About";


const Main = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <About />
      <Products />
    </div>
  );
};

export default Main;
