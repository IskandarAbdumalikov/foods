import React from 'react'
import "./pages.css"
import aboutImg from "../../../assets/images/about.svg"
import { btnStyles } from "../../../constants";

const About = () => {
  return (
    <div id="about" className="container">
      <div className="about__left">
        <img src={aboutImg} alt="" />
      </div>
      <div className="about__right">
        <h3 style={{ color: "#DC780B" }}>About US </h3>
        <h2>
          Food Stalls with Persons but to Product marketing plane catlogues etc
          to.
        </h2>
        <p>
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also equipment make
          your marketing plane Effective.
        </p>
        <button className='nav__btn' style={btnStyles}>Read More</button>
      </div>
    </div>
  );
}

export default About