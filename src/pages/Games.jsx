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
      <main id="search__main">
        <section>
          <div className="container">
            <div className="row">
              <div className="games__header">
                <h2>Top Results:</h2>
                <select name="" id="filter" defaultValue="ALL">
                  <option value="" disabled>Sort</option>
                  <option value="ALL">All</option>
                  <option value="BROWSER">Browser</option>
                  <option value="PC">PC</option>
                  <option value="RECENT">Most Recent</option>
                </select>
              </div>
              <div className="games">
                <FontAwesomeIcon icon="spinner" className="games__loading--spinner" />
              </div>
              <div className="load__btn--wrapper">
                <button id="load__btn">Load More</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Games;
