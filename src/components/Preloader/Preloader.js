import React from "react";
import "./desktop.scss";

function Preloader(props) {
  return (
    <div className={`preloader ${props.big ? "big" : ""} `}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Preloader;
