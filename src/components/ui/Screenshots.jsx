import React, { useEffect, useRef, useState } from "react";

const Screenshots = ({ gameInfo, loadingInfo }) => {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  //   useEffect(() => {
  //     const image = new Image();
  //     image.src = gameInfo.screenshots[0].image;
  //     image.onload = () => {
  //       setTimeout(() => {
  //         if (mountedRef.current) {
  //           setImg(image);
  //         }
  //       }, 500);
  //     };
  //     return () => {
  //       mountedRef.current = false;
  //     };
  //   }, []);

  return (
    <>
      {loadingInfo ? (
        <>
          <div className="game__screenshot--skeleton"></div>
          <div className="game__screenshot--skeleton"></div>
          <div className="game__screenshot--skeleton"></div>
        </>
      ) : (
        <>
        <div className="game-info__section--title">{gameInfo.title} Screenshots:</div>
          <figure className="game-info__screenshot">
            <img
              className="game-info__screenshot--img"
              src={gameInfo.screenshots[0].image}
              alt=""
            />
            <img
              className="game-info__screenshot--img"
              src={gameInfo.screenshots[1].image}
              alt=""
            />
            <img
              className="game-info__screenshot--img"
              src={gameInfo.screenshots[2].image}
              alt=""
            />
          </figure>
        </>
      )}
    </>
  );
};

export default Screenshots;
