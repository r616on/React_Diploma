import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./desktop.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchItemsCatalogCategory } from "../../store-toolkit/SliceActionCreators";
import Card from "../Card/Card";

function Catalog() {
  const { items, category, loading, error } = useSelector(
    (store) => store.CatalogSlice
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItemsCatalogCategory());
  }, []);

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <form className="catalog-search-form form-inline">
        <input className="form-control" placeholder="Поиск" />
      </form>
      <ul className="catalog-categories nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Все
          </a>
        </li>

        {category.map((item) => {
          return (
            <li key={item.id} className="nav-item">
              <a className="nav-link" href="#">
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="row">
        {items.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              category={item.category}
              title={item.title.slice(0, 27)}
              price={item.price}
              // images={item.images[0]}
            />
          );
        })}
      </div>
      <div className="text-center">
        <button className="btn btn-outline-primary">Загрузить ещё</button>
      </div>
    </section>
  );
}

export default Catalog;
