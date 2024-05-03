import React from "react";
import featuresCard1 from "../../../assets/images/featuresCard1.svg";
import featuresCard2 from "../../../assets/images/featuresCard2.svg";
import featuresCard3 from "../../../assets/images/featuresCard3.svg";
import "./pages.css";

const Featured = () => {
  return (
    <section className="featured container">
      <h3 style={{ color: "#DC780B" }}>Features</h3>
      <h2>Food with a New Passion</h2>
      <div className="features__cards">
        <div className="features__card">
          <img src={featuresCard1} alt="" />
          <h3>Quality Food</h3>
          <p>
            It can be a very secure path to earn good money and make you very
            successful creative entrepreneur.
          </p>
        </div>
        <div className="features__card">
          <img src={featuresCard2} alt="" />
          <h3>Quality Food</h3>
          <p>
            It can be a very secure path to earn good money and make you very
            successful creative entrepreneur.
          </p>
        </div>
        <div className="features__card">
          <img src={featuresCard3} alt="" />
          <h3>Quality Food</h3>
          <p>
            It can be a very secure path to earn good money and make you very
            successful creative entrepreneur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Featured;
