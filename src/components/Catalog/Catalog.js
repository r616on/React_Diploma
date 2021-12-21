import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./desktop.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchItemsCatalogCategory,
  fetchItemsCatalog,
  OffsetCatalogFetch,
} from "../../store-toolkit/SliceActionCreators";
import { actionsCatalogSlice } from "../../store-toolkit/CatalogSlice";
import Card from "../Card/Card";

function Catalog() {
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
    dispatch(actionsCatalogSlice.setActivCategory(id));
    dispatch(fetchItemsCatalog());
  };

  useEffect(() => {
    dispatch(fetchItemsCatalogCategory());
    dispatch(fetchItemsCatalog(activCategory));
  }, []);

  useEffect(() => {
    dispatch(actionsCatalogSlice.initOffset());
    if (!offsetActive) {
      dispatch(actionsCatalogSlice.setOffsetActive(true));
    }
  }, [activCategory]);

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <form className="catalog-search-form form-inline">
        <input className="form-control" placeholder="Поиск" />
      </form>
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
              dispatch(OffsetCatalogFetch(offset));
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
