import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Games from "./pages/Games";
import axios from "axios";
import { useState } from "react";

function App() {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "0a43c950bdmsh126f1842ed54776p1fc0bcjsnefc1964260ce",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const loadLimitDefault = 6;
  const [allGames, setAllGames] = useState([]);
  const [games, setGames] = useState(
    new Array(6).fill(0).map((_, index) => ({ id: index }))
  );
  let [loadLimit, setLoadLimit] = useState(0);
  let darkMode = false;
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  function toggleContrast() {
    darkMode = !darkMode;
    if (darkMode) {
      document.body.classList += " dark-theme";
    } else {
      document.body.classList.remove("dark-theme");
    }
  }

  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  function loadButton(activateButton) {
    if (document.getElementById("load__btn")) {
      if (activateButton) {
        if (document.getElementById("load__btn").hasAttribute("disabled")) {
          document.getElementById("load__btn").removeAttribute("disabled");
        }
      } else {
        document.getElementById("load__btn").setAttribute("disabled", "");
      }
    }
  }

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

  function filterGamesByName() {
    if (inputValue) {
      setGames(
        allGames.filter((game) => game.title.toLowerCase().includes(inputValue))
      );
      loadGames(false);
      loadButton(false);
    } else {
      loadButton(true);
      setGames(allGames.slice(0, loadLimit));
    }
  }

  function searchGames() {
    setLoading(true);
    setInputValue(
      document.getElementById("input__area").value.trim().toLowerCase()
    );
  }

  function loadGames(loadMoreGames) {
    if (loadMoreGames) {
      if (loadLimit + 6 >= allGames.length) {
        setLoadLimit(allGames.length);
        loadButton(false);
      } else {
        setLoadLimit((loadLimit) => loadLimit + 6);
        loadButton(true);
      }
    } else {
      loadButton(true);
      setLoadLimit(loadLimitDefault);
    }
  }

  async function fetchGames(currentFilter, resetLoadLimit) {
    if (resetLoadLimit) {
      setLoadLimit(loadLimitDefault);
    }
    const { data } = await axios.get(filterGames(currentFilter), options);
    setAllGames(data);
    filterGamesByName();
    loadGames(false);
  }

  return (
    <Router>
      <div className="App">
        <Nav
          toggleContrast={toggleContrast}
          openMenu={openMenu}
          closeMenu={closeMenu}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                options={options}
                filterGames={filterGames}
                fetchGames={fetchGames}
                loadGames={loadGames}
                loadButton={loadButton}
                filterGamesByName={filterGamesByName}
                setAllGames={setAllGames}
                allGames={allGames}
                setGames={setGames}
                games={games}
                setLoadLimit={setLoadLimit}
                loadLimit={loadLimit}
                setInputValue={setInputValue}
                inputValue={inputValue}
                setLoading={setLoading}
                loading={loading}
                searchGames={searchGames}
              />
            }
          />
          <Route
            path="/games"
            exact
            element={
              <Games
                options={options}
                filterGames={filterGames}
                fetchGames={fetchGames}
                loadGames={loadGames}
                loadButton={loadButton}
                filterGamesByName={filterGamesByName}
                setAllGames={setAllGames}
                allGames={allGames}
                setGames={setGames}
                games={games}
                setLoadLimit={setLoadLimit}
                loadLimit={loadLimit}
                setInputValue={setInputValue}
                inputValue={inputValue}
                setLoading={setLoading}
                loading={loading}
                searchGames={searchGames}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
