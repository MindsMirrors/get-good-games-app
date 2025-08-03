import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function GameInfo({ options }) {
  const { id } = useParams();
  const [gameInfo, setGameInfo] = useState([]);
  const [loadingInfo, setLoadingInfo] = useState();

  async function fetchGameInfo() {
    setLoadingInfo(true);
    const { data } = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options
    );
    setGameInfo(data);
    setLoadingInfo(false);
  }

  useEffect(() => {
    fetchGameInfo()
  }, [])
  return (
    <>
      <div className="game__wrapper">Game Info {id}</div>
      <div className="game__title">{gameInfo.title}</div>
      {/* <figure className="game__title">{gameInfo.thumbnail}</figure> */}
      <div className="game__title">{gameInfo.short_description}</div>
      <div className="game__title">{gameInfo.description}</div>
      <div className="game__title">{gameInfo.game_url}</div>
      <div className="game__title">{gameInfo.genre}</div>
      <div className="game__title">{gameInfo.platform}</div>
      <div className="game__title">{gameInfo.publisher}</div>
      <div className="game__title">{gameInfo.developer}</div>
      <div className="game__title">{gameInfo.release_date}</div>
      <div className="game__title">{gameInfo.freetogame_profile_url}</div>
      {/* <div className="game__title">{gameInfo.minimum_system_requirements}</div> */}
      {/* <div className="game__title">{gameInfo.screenshots}</div> */}
    </>
  );
}

export default GameInfo;
