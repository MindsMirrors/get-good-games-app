import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Platform from "../components/ui/Platform";

function GameInfo({ options }) {
  const { id } = useParams();
  const [gameInfo, setGameInfo] = useState([]);
  const [loadingInfo, setLoadingInfo] = useState();

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
      <figure>
        <img src={gameInfo.thumbnail} alt="" />
      </figure>
      <div className="game__title">{gameInfo.title}</div>
      <div>{gameInfo.short_description}</div>
      <div className="game__title">Release Date: {gameInfo.release_date}</div>
      <div className="game__title">Developer: {gameInfo.developer}</div>
      <div className="game__title">Publisher: {gameInfo.publisher}</div>
      <div className="game__title">{gameInfo.genre}</div>
      <div>
        <Link to={gameInfo.game_url}>
          Play {gameInfo.title} <Platform gamePlatform={gameInfo.platform} />
        </Link>
      </div>
      <div>
        <Link to={gameInfo.freetogame_profile_url}>
          Check out {gameInfo.title} on Free to Game
        </Link>
      </div>
      <figure>
        {/* <img src={gameInfo.screenshots[0].image} alt="" /> */}
        {/* <img src={gameInfo.screenshots[1].image} alt="" /> */}
        {/* <img src={gameInfo.screenshots[2].image} alt="" /> */}
      </figure>
      {/* <div className="game__title">{gameInfo.screenshots[0].id}</div> */}
      <div className="game__title">{gameInfo.description}</div>
      <div>System Requirements:</div>
      <div className="game__title">{gameInfo?.minimum_system_requirements?.os}</div>
      <div className="game__title">{gameInfo?.minimum_system_requirements?.processor}</div>
      <div className="game__title">{gameInfo?.minimum_system_requirements?.memory}</div>
      <div className="game__title">{gameInfo?.minimum_system_requirements?.graphics}</div>
      <div className="game__title">{gameInfo?.minimum_system_requirements?.storage}</div>
    </>
  );
}

export default GameInfo;
