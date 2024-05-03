import React from "react";
import logo from "../../logo.svg";
import { btnStyles, hoverBtnStyles, navList } from "../../constants";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header>
      <nav className="navbar container">
        <div className="nav__left">
          <div className="nav__logo">
            <img src={logo} alt="" />
          </div>
          <ul className="nav__list">
            {navList.map((link, inx) => {
              return (
                <a className="nav__link" href="#" key={inx}>
                  {link}
                </a>
              );
            })}
          </ul>
        </div>
        <div className="nav__btns">
          <button className="nav__btn" style={btnStyles}>Booking now</button>
          <GiHamburgerMenu className="hamburger"/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
