import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Platform from "../components/ui/Platform";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Requirements from "../components/ui/Requirements";
import Screenshots from "../components/ui/Screenshots";

function GameInfo({ options }) {
  const { id } = useParams();
  const [gameInfo, setGameInfo] = useState([]);
  const [loadingInfo, setLoadingInfo] = useState(true);

  async function fetchGameInfo() {
    setLoadingInfo(true);
    const { data } = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    setGameInfo(data);
    setLoadingInfo(false);
  }

  useEffect(() => {
    fetchGameInfo();
  }, []);
  return (
    <>
      <div className="game-info__container">
        <div className="row">
          <div className="game__profile">
            <div className="game__profile--left">
              <div className="game__profile--sidebar">
                {loadingInfo ? (
                  <div className="game__card--skeleton"></div>
                ) : (
                  <figure>
                    <img
                      className="game__thumbnail"
                      src={gameInfo.thumbnail}
                      alt=""
                    />
                  </figure>
                )}

                <a
                  className="play-game__button"
                  href={gameInfo.game_url}
                  target="blank"
                >
                  <FontAwesomeIcon
                    className="play__icon"
                    icon={["fas", "play"]}
                  />
                  PLAY NOW
                </a>
                <div>
                  <a
                    className="game-info__free-to-game"
                    href={gameInfo.freetogame_profile_url}
                    target="blank"
                  >
                    {gameInfo.title} on FREETOGAME
                    {/* <div className="">on FREETOGAME</div> */}
                  </a>
                </div>
              </div>
            </div>
            <div className="game__profile--right">
              <div className="game-info__title">{gameInfo.title}</div>
              <div className="game-info__description--short">
                {gameInfo.short_description}
              </div>
              <div className="game__profile--info">
                <div className="profile__info--right">
                  <div className="profile__info--title"> RELEASE DATE: </div>
                  <div className="profile__info--title"> DEVELOPER: </div>
                  <div className="profile__info--title"> PUBLISHER: </div>
                  <div className="profile__info--title"> GENRE: </div>
                  <div className="profile__info--title"> PLATFORM: </div>
                </div>
                <div className="profile__info">
                  <div className="profile__info--content">
                    {gameInfo.release_date}
                  </div>
                  <div className="profile__info--content">
                    {gameInfo.developer}
                  </div>
                  <div className="profile__info--content">
                    {gameInfo.publisher}
                  </div>
                  <div className="profile__info--content">{gameInfo.genre}</div>
                  <div className="profile__info--content">
                    {gameInfo.platform}
                  </div>
                </div>
              </div>
              <div className="game-info__section--title">
                About {gameInfo.title}:
              </div>
              <div className="game-info__description--long">
                {gameInfo.description}
              </div>
              <Screenshots gameInfo={gameInfo} loadingInfo={loadingInfo} />
              <Requirements gameInfo={gameInfo} />
            </div>
          </div>

          {/* <div className="game__title">{gameInfo.screenshots[0].id}</div> */}
        </div>
      </div>
    </>
  );
}

export default GameInfo;
