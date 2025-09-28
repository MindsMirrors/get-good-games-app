import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__row">
          <h1 className="footer__logo-text">
            Get <span className="highlight__logo">Good</span> Games
          </h1>
          <ul className="footer__links">
            <li>
              <Link to="/" className="footer__link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="footer__link no-cursor">
                About
              </Link>
            </li>
            <li>
              <Link to="/games" className="footer__link">
                Games
              </Link>
            </li>
            <li>
              <Link to="/" className="footer__link no-cursor">
                Contact
              </Link>
            </li>
          </ul>
          <div className="footer__copy">
            Copyright &copy; 2025 Get Good Games
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
