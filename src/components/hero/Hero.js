import React from "react";
import heroImg from "../../assets/images/hero.svg";
import { btnStyles, hoverBtnStyles } from "../../constants";
import "./hero.css";

const Hero = () => {
  return (
    <div className="container hero">
      <div className="hero__left">
        <h1>Making time a good time by making food the good food. </h1>
        <p>
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment,
        </p>
        <div className="hero__btns">
          <button className="nav__btn" style={btnStyles}>
            Order Now
          </button>
          <button className="hero__btn" style={hoverBtnStyles}>
            Food details
          </button>
        </div>
      </div>
      <div className="hero__right">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
