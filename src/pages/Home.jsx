import React, { useEffect, useState } from "react";
import HeaderImage from "../assets/undraw_gaming_v7a6 (1).svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Home({
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
  setLoading,
  loading,
  searchGames
}) {
  let navigate = useNavigate();
  
  useEffect(() => {
    if (inputValue) {
      setGames(
        allGames.filter((game) => game.title.toLowerCase().includes(inputValue))
      );
      loadGames(false);
    } else {
      setGames(allGames.slice(0, loadLimit));
    }
  }, [inputValue, loading]);

  useEffect(() => {
    if (loading) {
      setLoading(false);
      navigate(`games`);
    }
  }, [games]);

  return (
    <>
      <header>
        <div className="header__container">
          <div className="header__description">
            <h2>
              Best place to find <span className="highlight">free</span> games
              right at your fingertips
            </h2>
            <h3 className="input__title">
              Find your next <span className="highlight">favorite</span> game
            </h3>
            <div className="input__wrapper">
              <input
                type="text"
                id="input__area"
                placeholder="Search Games by Title"
                onKeyDown={(event) =>
                  event.key === "Enter" && searchGames()
                }
              />
              <button
                className="input__btn"
                onClick={() => searchGames()}
              >
                {loading ? (
                  <FontAwesomeIcon icon="spinner" />
                ) : (
                  <FontAwesomeIcon icon="magnifying-glass" />
                )}
              </button>
            </div>
            <figure className="header__img--wrapper">
              <img src={HeaderImage} alt="" className="header__img" />
            </figure>
          </div>
        </div>
      </header>
    </>
  );
}

export default Home;
