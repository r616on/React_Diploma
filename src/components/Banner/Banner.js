import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import banner from "../../img/banner.jpg";
import "./desktop.scss";

function Banner() {
  return (
    <div className="banner">
      <img src={banner} className="img-fluid" alt="К весне готовы!" />
      <h2 className="banner-header">К весне готовы!</h2>
    </div>
  );
}

export default Banner;
