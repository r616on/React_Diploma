import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./desktop.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategoryItems,
  filterCategory,
  offsetCatalogFetch,
} from "../../store-toolkit/CatalogThunk";
import { catalogActions } from "../../store-toolkit/CatalogSlice";
import Card from "../Card/Card";
import Search from "../Search/Search";

function Catalog({ index }) {
  const {
    items,
    category,
    activCategory,
    offset,
    offsetActive,
    loading,
    error,
  } = useSelector((store) => store.CatalogSlice);
  const dispatch = useDispatch();
  const filterCatalogHandle = (id) => {
    dispatch(catalogActions.setActivCategory(id));
    dispatch(filterCategory());
  };

  useEffect(() => {
    dispatch(fetchCategoryItems());
    dispatch(filterCategory(activCategory));
  }, [dispatch]);

  useEffect(() => {
    dispatch(catalogActions.initOffset());
    if (!offsetActive) {
      dispatch(catalogActions.setOffsetActive(true));
    }
  }, [activCategory]);

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {!index && <Search />}
      <ul className="catalog-categories nav justify-content-center">
        <li className="nav-item">
          <div
            className={`nav-link ${activCategory === "all" ? "active" : ""}`}
            onClick={() => {
              filterCatalogHandle("all");
            }}
          >
            Все
          </div>
        </li>

        {category.map((item) => {
          return (
            <li key={item.id} className="nav-item">
              <div
                className={`nav-link ${
                  activCategory === item.id ? "active" : ""
                }`}
                onClick={() => filterCatalogHandle(item.id)}
              >
                {item.title}
              </div>
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
              images={item.images[0]}
              catalog
            />
          );
        })}
      </div>
      <div className="text-center">
        {offsetActive && (
          <button
            onClick={() => {
              dispatch(offsetCatalogFetch(offset));
            }}
            className="btn btn-outline-primary"
          >
            Загрузить ещё
          </button>
        )}
      </div>
    </section>
  );
}

export default Catalog;
