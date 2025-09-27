import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Platform from "./Platform";
import { useNavigate } from "react-router-dom";

const Game = ({ game }) => {
  let navigate = useNavigate();
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = game.thumbnail;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      }, 500);
    };
    return () => {
      mountedRef.current = false;
    };
  },[]);

  return (
    <>
      {img ? (
        <>
          <div className="game game__click" key={game.id} onClick={() => navigate(`${game.id}`)}>
            <figure className="game__img--wrapper">
              <img className="game__img" src={img.src} alt="" />
            </figure>
            <div className="game__title-platform">
              <div className="game__title">{game.title}</div>
              <div className="game__platform">
                <Platform gamePlatform={game.platform}/>
              </div>
            </div>
            <div className="game__dev-release">
              <div className="game__developer">{game.developer}</div>
              <div className="game__release-date">
                {game.release_date} - {game.publisher}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <div className="game__card--skeleton"></div>
        </div>
      )}
    </>
  );
};

export default Game;
