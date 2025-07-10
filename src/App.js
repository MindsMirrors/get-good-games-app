import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Games from "./pages/Games";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "0a43c950bdmsh126f1842ed54776p1fc0bcjsnefc1964260ce",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const urlAll = "https://free-to-play-games-database.p.rapidapi.com/api/games";
  const urlPlatform =
  "https://free-to-play-games-database.p.rapidapi.com/api/games?platform="; //pc, browser or all
  const urlRelease =
  "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date";
  let gamesLoadLimit = 6;
  let currentFilter;
  let currentCatagory = "";

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState();
  let darkMode = false;
  
  async function renderGames(currentFilter) {
    const sortURL = sortGamesByFilter(currentFilter);
    
    
  }

  function sortGamesByFilter(currentFilter) {
    if (currentFilter === "BROWSER") {
      return urlPlatform + "browser";
    } else if (currentFilter === "PC") {
      return urlPlatform + "pc";
    } else if (currentFilter === "RECENT") {
      return urlRelease;
    } else {
      return urlAll;
    }
  }

  async function getGames(sortURL) {
    setLoading(true);
    const { data } = await axios.get(sortURL);
    setGames(data);
    setLoading(false);
  }

  useEffect(() => {
    renderGames();
  }, []);

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

  return (
    <Router>
      <div className="App">
        <Nav
          toggleContrast={toggleContrast}
          openMenu={openMenu}
          closeMenu={closeMenu}
        />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/games" exact element={<Games />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
