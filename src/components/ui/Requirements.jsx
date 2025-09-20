import React from "react";

const Requirements = ({ gameInfo }) => {
  if (gameInfo.platform === "PC (Windows)" || gameInfo.platform === "Windows") {
    return (
      <>
        <div className="system_requirements">Minimum System Requirements</div>
        <div className="row">
          <div className="system__coloumn">
            <div className="system__column--item">
              <div className="system__column--title">OS</div>
              <div className="system__coloumn--info">
                {gameInfo?.minimum_system_requirements?.os}
              </div>
            </div>
            <div className="system__column--item">
              <div className="system__column--title">Processor</div>
              <div className="system__coloumn--info">
                {gameInfo?.minimum_system_requirements?.processor}
              </div>
            </div>
            <div className="system__column--item">
              <div className="system__column--title">Memory</div>
              <div className="system__coloumn--info">
                {gameInfo?.minimum_system_requirements?.memory}
              </div>
            </div>
            <div className="system__column--item">
              <div className="system__column--title">Graphics</div>
              <div className="system__coloumn--info">
                {gameInfo?.minimum_system_requirements?.graphics}
              </div>
            </div>
            <div className="system__column--item">
              <div className="system__column--title">Storage</div>
              <div className="system__coloumn--info">
                {gameInfo?.minimum_system_requirements?.storage}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="system_requirements">Minimum System Requirements</div>
        <div className="system__column--title">
          {gameInfo.title} is a browser based game and should run smoothly on
          any PC with an updated web-browser
        </div>
      </>
    );
  }
};

export default Requirements;
