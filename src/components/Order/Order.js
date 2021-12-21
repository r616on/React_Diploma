import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./desktop.scss";

function Order() {
  return (
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
      <div className="card" style={{ maxWidth: "30rem", margin: " 0 auto" }}>
        <form className="card-body">
          <div className="form-group">
            <label for="phone">Телефон</label>
            <input
              className="form-control"
              id="phone"
              placeholder="Ваш телефон"
            />
          </div>
          <div className="form-group">
            <label for="address">Адрес доставки</label>
            <input
              className="form-control"
              id="address"
              placeholder="Адрес доставки"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="agreement"
            />
            <label className="form-check-label" for="agreement">
              Согласен с правилами доставки
            </label>
          </div>
          <button type="submit" className="btn btn-outline-secondary">
            Оформить
          </button>
        </form>
      </div>
    </section>
  );
}

export default Order;