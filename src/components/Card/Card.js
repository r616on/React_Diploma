import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./desktop.scss";

function Card({ id, category, title, price, images }) {
  return (
    <div className="col-4">
      <div className="card">
        <img src={images} className="card-img-top img-fluid" alt={title} />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{price}.</p>
          <a href="/products/1.html" className="btn btn-outline-primary">
            Заказать
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
