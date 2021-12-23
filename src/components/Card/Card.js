import React from "react";
import { Link } from "react-router-dom";
import "./desktop.scss";

function Card({ id, title, price, images, catalog }) {
  return (
    <div className="col-4">
      <div className={`card ${catalog ? "catalog-item-card" : ""}`}>
        <div className="card__img__row">
          <img src={images} className="img" alt={title} />
        </div>
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{price}.</p>
          <Link to={`/catalog/${id}`} className="btn btn-outline-primary">
            Заказать
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
