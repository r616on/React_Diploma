import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchItemProduct } from "../../store-toolkit/ProductDescriptionThunk";
import { productDescriptionActions } from "../../store-toolkit/ProductDescriptionSlice";
import { cartActions } from "../../store-toolkit/CartSlice";
import Preloader from "../Preloader/Preloader";
import ErrorView from "../ErrorView/ErrorView";
import "./desktop.scss";

function ProductDescription({ id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const { loading, error, activSize, count } = useSelector(
    (store) => store.productDescription
  );

  useEffect(() => {
    dispatch(fetchItemProduct(id));
    // eslint-disable-next-line
  }, [dispatch]);

  function sizeAvalible() {
    if (!sizes) {
      return;
    } else {
      return sizes.filter((item) => item.avalible).length > 0;
    }
  }

  return (
    <Fragment>
      {loading === "loading" || error ? (
        <div className="Product_Preloader">
          {loading === "loading" ? <Preloader big /> : null}
          {error ? (
            <ErrorView>ОЙ....Ошибка загрузки информации о товаре</ErrorView>
          ) : null}
        </div>
      ) : null}
      {loading === "idel" && !error ? (
        <section className="container catalog-item">
          <h2 className="text-center">{title}</h2>
          <div className=" row">
            <div className="col-12 col-sm-5 Product_img_row">
              <img
                src={images ? images[0] : ""}
                className="img-fluid img_Product"
                alt={title ? title : null}
              />
            </div>
            <div className="col-12 col-sm-7">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Артикул</td>
                    <td>{sku ? sku : null}</td>
                  </tr>
                  <tr>
                    <td>Производитель</td>
                    <td>{manufacturer ? manufacturer : null}</td>
                  </tr>
                  <tr>
                    <td>Цвет</td>
                    <td>{color ? color : null}</td>
                  </tr>
                  <tr>
                    <td>Материалы</td>
                    <td>{material ? material : null}</td>
                  </tr>
                  <tr>
                    <td>Сезон</td>
                    <td>{season ? season : null}</td>
                  </tr>
                  <tr>
                    <td>Повод</td>
                    <td>{reason ? reason : null}</td>
                  </tr>
                  <tr>
                    <td>Цена</td>
                    <td>{price ? price : null} Р</td>
                  </tr>
                </tbody>
              </table>
              {sizeAvalible() && (
                <div className="text-center">
                  <p>
                    Размеры в наличии:{" "}
                    {sizes.map((item) => {
                      if (item.avalible) {
                        return (
                          <span
                            key={item.size}
                            onClick={() =>
                              dispatch(
                                productDescriptionActions.setActivSize(
                                  item.size
                                )
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
                      } else {
                        return null;
                      }
                    })}
                  </p>
                  <p>
                    Количество:
                    <span className="btn-group btn-group-sm pl-2">
                      <button
                        onClick={() =>
                          dispatch(productDescriptionActions.subtractCount())
                        }
                        className="btn btn-secondary"
                      >
                        -
                      </button>
                      <span className="btn btn-outline-primary">{count}</span>
                      <button
                        onClick={() =>
                          dispatch(productDescriptionActions.addCount())
                        }
                        className="btn btn-secondary"
                      >
                        +
                      </button>
                    </span>
                  </p>
                </div>
              )}
              {activSize && sizeAvalible() ? (
                <button
                  onClick={() => {
                    dispatch(
                      cartActions.addItem({
                        id: +id,
                        title,
                        size: activSize,
                        count,
                        price: +price,
                      })
                    );
                    dispatch(productDescriptionActions.initProduct());
                    navigate("/cart");
                  }}
                  className="btn btn-danger btn-block btn-lg"
                >
                  В корзину
                </button>
              ) : (
                <span>Заказ невозможен без размера. Выберите размер</span>
              )}
            </div>
          </div>
        </section>
      ) : null}
    </Fragment>
  );
}

export default ProductDescription;
