import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";


function App() {
  let darkMode = false;

    function toggleContrast() {
        darkMode = !darkMode;
        if (darkMode) {
            document.body.classList += " dark-theme";
        }  else {
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
        <Nav toggleContrast={toggleContrast} />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
