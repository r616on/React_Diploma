import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store-toolkit/CartSlice";
import Preloader from "../Preloader/Preloader";
import { url } from "../../config";

import "./desktop.scss";

const initialState = { phone: "", address: "", agreement: false };

function Order() {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState("idel");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const items = useSelector((store) => store.cart.items);

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
      setSuccess(false);
      setError(false);
      setLoading("loading");
      fetch(`${url}/api/order`, {
        method: "POST",
        body: JSON.stringify({
          owner: {
            phone: form.phone,
            address: form.address,
          },
          items: [...items],
        }),
      })
        .then((resp) => {
          if (resp.status > 200 && resp.status < 300) {
            setSuccess(true);
            setLoading("idel");
            setForm(initialState);
            dispatch(cartActions.initCart());
          }
        })
        .catch(() => {
          setLoading("idel");
          setError(true);
        });
    }
  };
  return (
    <section className="order">
      {loading === "loading" ? (
        <div className="order_Preloader">
          {loading === "loading" ? <Preloader /> : null}
          {/* {error ? <ErrorView>ОЙ....Ошибка загрузки данных</ErrorView> : null} */}
        </div>
      ) : null}
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
          <div className="Order_control">
            <button type="submit" className="btn btn-outline-secondary">
              Оформить
            </button>
            <div
              className="status_massage"
              style={
                success ? { color: "green" } : error ? { color: "red" } : null
              }
            >
              {success ? "Успешно" : null}
              {error ? "Ошибка запроса" : null}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Order;
