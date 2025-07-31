import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Game from "../components/ui/Game";

function Games({
  options,
  filterGames,
  fetchGames,
  loadGames,
  loadButton,
  filterGamesByName,
  setAllGames,
  allGames,
  setGames,
  games,
  setLoadLimit,
  loadLimit,
  setInputValue,
  inputValue,
  setloading,
  loading,
  searchGames,
}) {
  useEffect(() => {
    if (inputValue) {
      document.getElementById("input__area").value = inputValue;
    }
    fetchGames();
  }, []);

  useEffect(() => {
    filterGamesByName();
  }, [loadLimit, allGames, inputValue]);

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
              onKeyDown={(event) => event.key === "Enter" && searchGames()}
            />
            <button className="input__btn" onClick={() => searchGames()}>
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
                <select
                  name=""
                  id="filter"
                  defaultValue="ALL"
                  onChange={(event) => fetchGames(event.target.value, true)}
                >
                  <option value="" disabled>
                    Sort
                  </option>
                  <option value="ALL">All</option>
                  <option value="BROWSER">Browser</option>
                  <option value="PC">PC</option>
                  <option value="RECENT">Most Recent</option>
                </select>
              </div>
              <div className="games">
                <div className="games">
                  {games.length > 0 ? (
                    games.map((game) => <Game game={game} key={game.id} />)
                  ) : (
                    <h3 class="no-game"> No Games Found </h3>
                  )}
                </div>
              </div>
              <div className="load__btn--wrapper">
                <button id="load__btn" onClick={() => loadGames(true)}>
                  Load More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Games;
