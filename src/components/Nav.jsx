import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SponsorLogo from "../assets/freetogame-logo.png";

function Nav({ toggleContrast, openMenu, closeMenu }) {
  return (
    <>
      <nav>
        <div className="nav__container">
          <div className="logo">
            <Link to="/" className="nav__link">
              <FontAwesomeIcon className="nav__logo" icon="ghost" />
              <h1 className="nav__logo-text">
                Get <span className="highlight__logo">Good</span> Games{" "}
              </h1>
            </Link>
          </div>
          <ul className="nav__links">
            <li>
              <Link to="/" className="nav__link nav__link--hover-effect">
                Home
              </Link>
            </li>
            <li>
              <Link to="/games" className="nav__link nav__link--hover-effect">
                Games
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="nav__link nav__link--hover-effect no-cursor"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="nav__link nav__link--hover-effect no-cursor"
              >
                Contact
              </Link>
            </li>
            <li className="nav__link" onClick={() => toggleContrast()}>
              <FontAwesomeIcon className="click" icon="circle-half-stroke" />
            </li>
          </ul>
          <button className="btn__menu--open" onClick={() => openMenu()}>
            <FontAwesomeIcon className="click" icon="fa-bars" />
          </button>
          <div className="menu__backdrop">
            <button
              className="btn__menu btn__menu--close"
              onClick={() => closeMenu()}
            >
              <FontAwesomeIcon className="click" icon="xmark" />
            </button>
            <ul className="menu__links">
              <li className="menu__list">
                <Link to="/" className="menu__link" onClick={() => closeMenu()}>
                  Home
                </Link>
              </li>
              <li className="menu__list">
                <Link
                  to="/games"
                  className="menu__link"
                  onClick={() => closeMenu()}
                >
                  Games
                </Link>
              </li>
              <li className="menu__list">
                <Link
                  to="/"
                  className="menu__link no-cursor"
                  onClick={() => closeMenu()}
                >
                  About
                </Link>
              </li>
              <li className="menu__list">
                <Link
                  to="/"
                  className="menu__link no-cursor"
                  onClick={() => closeMenu()}
                >
                  Contact
                </Link>
              </li>
              <li className="menu__list">
                <FontAwesomeIcon
                  className="click menu__contrast"
                  icon="circle-half-stroke"
                  onClick={() => toggleContrast()}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="sponsor">
          <p className="sponsor__title">Powered by:</p>
          <div className="sponsor__logo">
            <a href="https://www.freetogame.com/" target="blank">
              <img src={SponsorLogo} alt="" className="sponsor__logo--img" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
