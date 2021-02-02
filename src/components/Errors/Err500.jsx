import React from "react";
import "./errors.css";
import docimg2 from "./docimg2.png";

function Err500() {
  return (
    <div className="container-500">
      <div className="doctorImgDiv">
        <img className="doctorImg" src={docimg2} alt="Doctor IMG"></img>
      </div>
      <div className="error500-message">
        <p>
          Our site does not seem to have a pulse right now. Resuscitation
          efforts underway.
        </p>
      </div>
    </div>
  );
}

export default Err500;
