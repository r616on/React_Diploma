import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./desktop.scss";

const initialState = { phone: "", address: "", agreement: false };

/////url
const adres = "https://react-diploma--backend.herokuapp.com";
//const adres = "http://localhost";
//  http://localhost:7070/api/top-sales

const port = "";
const url = `${adres}:${port}`;
/////

function Order() {
  const [form, setForm] = useState(initialState);
  const items = useSelector((store) => store.cart.items);
  console.log(items);

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.phone && form.address && form.agreement) {
      fetch(`${url}/api/order`, {
        method: "POST",
        body: JSON.stringify({
          owner: {
            phone: form.phone,
            address: form.address,
          },
          items: [...items],
        }),
      }).then((resp) => {
        console.log(resp);
      });
    }
  };
  return (
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
      <div className="card" style={{ maxWidth: "30rem", margin: " 0 auto" }}>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              id="phone"
              value={form.phone}
              placeholder="Ваш телефон"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес доставки</label>
            <input
              type="text"
              className="form-control"
              name="address"
              id="address"
              value={form.address}
              placeholder="Адрес доставки"
              onChange={handleChange}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="agreement"
              id="agreement"
              checked={form.agreement}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="agreement">
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
