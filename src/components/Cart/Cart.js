import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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
    <section className="cart">
      <h2 className="text-center">Корзина</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Название</th>
            <th scope="col">Размер</th>
            <th scope="col">Кол-во</th>
            <th scope="col">Стоимость</th>
            <th scope="col">Итого</th>
            <th scope="col">Действия</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={item.id} id={item.id}>
                <td scope="row">{+index + 1}</td>
                <td>
                  <Link to={`/catalog/${item.id}`}>{item.title}</Link>
                </td>
                <td>{item.size}</td>
                <td>{item.count}</td>
                <td>{item.price} руб.</td>
                <td>{+item.price * +item.count} руб.</td>
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
            <td>{result} руб.</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Cart;
