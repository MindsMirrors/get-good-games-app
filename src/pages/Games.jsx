import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Games() {
  return (
    <>
      <div className="search__container">
        <div className="header__description">
          <h2 className="search__description">Browse Games</h2>
          <div className="input__wrapper">
            <input
              type="text"
              id="input__area"
              placeholder="Search Games by Title"
            />
            <button className="input__btn">
              <FontAwesomeIcon icon="magnifying-glass" />
            </button>
          </div>
        </div>
      </div>
      <main id="search__main"></main>
    </>
  );
}

export default Games;
