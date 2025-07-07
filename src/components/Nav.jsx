import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Nav( {toggleContrast} ) {
  return (
    <>
      <nav>
        <div className="nav__container">
          <div className="logo">
            <Link to="/" className="nav__link">
              <FontAwesomeIcon className="nav__logo" icon="ghost" />
              <h1 className="nav__logo-text">
                Get <span className="highlight__logo">Good</span> <br /> Games{" "}
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
              <Link to="/" className="nav__link nav__link--hover-effect no-cursor">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="nav__link nav__link--hover-effect no-cursor">
                Contact
              </Link>
            </li>
            <li className="nav__link" onClick={() => toggleContrast()}>
              <FontAwesomeIcon className="click" icon="circle-half-stroke" />
            </li>
          </ul>
          <button className="btn__menu--open">
            <FontAwesomeIcon className="click" icon="fa-bars" />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Nav;
