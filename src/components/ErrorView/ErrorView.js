import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import banner from "../../img/banner.jpg";
import "./desktop.scss";

function ErrorView(props) {
  return <div className="ErrorView">{props.children}</div>;
}

export default ErrorView;
