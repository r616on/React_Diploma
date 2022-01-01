import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderFetch } from "../../store-toolkit/OrderThunk";
import { orderActions } from "../../store-toolkit/OrderSlice";
import Preloader from "../Preloader/Preloader";

import "./desktop.scss";

function Order() {
  const { form, loading, error, success } = useSelector((store) => store.order);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    if (success) {
      dispatch(orderActions.setSuccess(false));
    }
    dispatch(orderActions.changeValue({ fild: name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.phone && form.address && form.agreement) {
      dispatch(orderFetch());
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
      <div className="cart" style={{ maxWidth: "30rem", margin: " 0 auto" }}>
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
            <button
              type="submit"
              className="btn btn-outline-secondary"
              disabled={success ? true : false}
              style={
                success ? { color: "white", backgroundColor: "green" } : null
              }
            >
              {success ? "Заказ успешно оформлен..." : "Оформить"}
            </button>
            <div
              className="status_massage"
              style={error ? { color: "red" } : null}
            >
              {error ? "Ошибка запроса" : null}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Order;
