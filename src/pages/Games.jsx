import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Game from "../components/ui/Game";

function Games() {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "0a43c950bdmsh126f1842ed54776p1fc0bcjsnefc1964260ce",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const gamesLoadLimitDefault = 6;
  let gamesLoadLimit = 6;
  let currentCatagory = "";

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState();

  function filterGames(currentFilter) {
    if (currentFilter === "BROWSER") {
      return "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser";
    } else if (currentFilter === "PC") {
      return "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc";
    } else if (currentFilter === "RECENT") {
      return "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date";
    } else {
      return "https://free-to-play-games-database.p.rapidapi.com/api/games";
    }
  }

  async function fetchGames(currentFilter) {
    setLoading(true);
    const { data } = await axios.get(filterGames(currentFilter), options);
    setGames(data.slice(0, gamesLoadLimit));
    setLoading(false);
  }

  useEffect(() => {
    fetchGames();
  }, []);

  useEffect(() => {
    console.log(games);
  }, [games]);

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
                <select
                  name=""
                  id="filter"
                  defaultValue="ALL"
                  onChange={(event) => fetchGames(event.target.value)}
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
                  {games.map((game) => (
                    <Game game={game} key={game.id} />
                  ))}
                </div>
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
