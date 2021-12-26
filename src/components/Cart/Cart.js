import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store-toolkit/CartSlice";
import "./desktop.scss";

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);
  const [colSpan, setColSpan] = useState(2);

  const result = items.reduce((sum, item) => {
    sum = sum + +item.price * +item.count;
    return sum;
  }, 0);

  useEffect(() => {
    const screenWidth = window.screen.width;
    if (screenWidth < 769) {
      setColSpan(2);
    } else {
      setColSpan(5);
    }
  }, []);

  return (
    <section className="container cart">
      <h2 className="text-center">Корзина</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="table-col-item cart-mobile" scope="col">
              #
            </th>
            <th className="table-col-item" scope="col">
              Название
            </th>
            <th className="table-col-item cart-mobile" scope="col">
              Размер
            </th>
            <th className="table-col-item cart-mobile" scope="col">
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
                <td className="table-col-item cart-mobile">{+index + 1}</td>
                <td className="table-col-item">
                  <Link to={`/catalog/${item.id}`}>{item.title}</Link>
                </td>
                <td className="table-col-item cart-mobile">{item.size}</td>
                <td className="table-col-item cart-mobile">{item.count}</td>
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
                    className="btn btn-outline-danger btn-sm btn-dell"
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            );
          })}

          <tr>
            <td colSpan={colSpan} className="text-right">
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
