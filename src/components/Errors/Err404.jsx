import React from "react";
import barber from "./barber.png";

function Err404() {
  return (
    <div className="container-404">
      <div className="barberImgDiv">
        <img className="barberImg" src={barber} alt="Barber IMG"></img>
      </div>
      <div className="error404-message">
        <p>That page seems to have been snipped away.</p>
      </div>
    </div>
  );
}

export default Err404;
