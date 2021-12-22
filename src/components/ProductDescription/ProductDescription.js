import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchItemProduct } from "../../store-toolkit/ProductDescriptionThunk";
import { productDescriptionActions } from "../../store-toolkit/ProductDescriptionSlice";
import "./desktop.scss";

function ProductDescription({ id }) {
  const dispatch = useDispatch();
  const {
    title,
    images,
    sku,
    manufacturer,
    color,
    material,
    season,
    reason,
    price,
    sizes,
  } = useSelector((store) => store.productDescription.item);
  const { loading, activSize, amount } = useSelector(
    (store) => store.productDescription
  );
  useEffect(() => {
    dispatch(fetchItemProduct(id));
  }, []);

  return loading === "idel" ? (
    <section className="catalog-item">
      <h2 className="text-center">{title}</h2>
      <div className="row">
        <div className="col-5">
          <img src={images[0]} className="img-fluid" alt={title} />
        </div>
        <div className="col-7">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Артикул</td>
                <td>{sku}</td>
              </tr>
              <tr>
                <td>Производитель</td>
                <td>{manufacturer}</td>
              </tr>
              <tr>
                <td>Цвет</td>
                <td>{color}</td>
              </tr>
              <tr>
                <td>Материалы</td>
                <td>{material}</td>
              </tr>
              <tr>
                <td>Сезон</td>
                <td>{season}</td>
              </tr>
              <tr>
                <td>Повод</td>
                <td>{reason}</td>
              </tr>
              <tr>
                <td>Цена</td>
                <td>{price} Р</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <p>
              Размеры в наличии:
              {sizes.map((item) => {
                if (item.avalible) {
                  return (
                    <span
                      key={item.size}
                      onClick={() =>
                        dispatch(
                          productDescriptionActions.setActivSize(item.size)
                        )
                      }
                      className={
                        activSize === item.size
                          ? "catalog-item-size selected"
                          : "catalog-item-size"
                      }
                    >
                      {item.size}
                    </span>
                  );
                }
              })}
            </p>
            <p>
              Количество:
              <span className="btn-group btn-group-sm pl-2">
                <button
                  onClick={() =>
                    dispatch(productDescriptionActions.subtractAmount())
                  }
                  className="btn btn-secondary"
                >
                  -
                </button>
                <span className="btn btn-outline-primary">{amount}</span>
                <button
                  onClick={() =>
                    dispatch(productDescriptionActions.addAmount())
                  }
                  className="btn btn-secondary"
                >
                  +
                </button>
              </span>
            </p>
          </div>
          <button className="btn btn-danger btn-block btn-lg">В корзину</button>
        </div>
      </div>
    </section>
  ) : null;
}

export default ProductDescription;
