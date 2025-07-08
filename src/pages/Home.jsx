import React from 'react'
import HeaderImage from "../assets/undraw_gaming_v7a6 (1).svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home() {
  return (
    <>
      <header>
        <div className="header__container">
          <div className="header__description">
            <h2>Best place to find <span className="highlight">free</span> games right at your fingertips</h2>
            <h3 className="input__title">Find your next <span className="highlight">favorite</span> game</h3>
            <div className="input__wrapper">
              <input type="text" placeholder="Search Games by Title" id="input__area" />
              <button className="input__btn">
                <FontAwesomeIcon icon="magnifying-glass" />
              </button>
            </div>
            <figure className="header__img--wrapper">
              <img src={HeaderImage} alt="" className="header__img" />
            </figure>
          </div>
        </div>
      </header>
      Get Good Games
    </>
  )
}

export default Home
