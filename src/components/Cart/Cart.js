import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store-toolkit/CartSlice";
import "./desktop.scss";

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);
  const result = items.reduce((sum, item) => {
    sum = sum + +item.price * +item.count;
    return sum;
  }, 0);

  return (
    <section className="container cart">
      <h2 className="text-center">Корзина</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="table-col-item" scope="col">
              #
            </th>
            <th className="table-col-item" scope="col">
              Название
            </th>
            <th className="table-col-item" scope="col">
              Размер
            </th>
            <th className="table-col-item" scope="col">
              Кол-во
            </th>
            <th className="table-col-item" scope="col">
              Стоимость
            </th>
            <th className="table-col-item" scope="col">
              Итого
            </th>
            <th className="table-col-item" scope="col">
              Действия
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={item.id} id={item.id}>
                <td className="table-col-item">{+index + 1}</td>
                <td className="table-col-item">
                  <Link to={`/catalog/${item.id}`}>{item.title}</Link>
                </td>
                <td className="table-col-item">{item.size}</td>
                <td className="table-col-item">{item.count}</td>
                <td className="table-col-item">{item.price} руб.</td>
                <td className="table-col-item">
                  {+item.price * +item.count} руб.
                </td>
                <td>
                  <button
                    onClick={() =>
                      dispatch(
                        cartActions.delItem({ id: item.id, size: item.size })
                      )
                    }
                    className="btn btn-outline-danger btn-sm"
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            );
          })}

          <tr>
            <td colSpan="5" className="text-right">
              Общая стоимость
            </td>
            <td className="table-col-item">{result} руб.</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Cart;
