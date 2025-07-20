import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Platform = ({ gamePlatform }) => {
  if (gamePlatform === "PC (Windows)") {
    return <FontAwesomeIcon icon={["fab", "windows"]} />;
  } else if (gamePlatform === "Web Browser") {
    return <FontAwesomeIcon icon="window-maximize" />;
  } else {
    return (
      <>
        <FontAwesomeIcon icon="window-maximize" /> <span> </span>{" "}
        <FontAwesomeIcon icon={["fab", "windows"]} />
      </>
    );
  }
};

export default Platform;
