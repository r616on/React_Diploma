import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./desktop.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategoryItems } from "../../store-toolkit/CategoriesThunk";
import {
  filterCategory,
  offsetCatalogFetch,
} from "../../store-toolkit/CatalogThunk";
import { categoriesActions } from "../../store-toolkit/CategoriesSlice";
import Card from "../Card/Card";
import Search from "../Search/Search";
import Preloader from "../Preloader/Preloader";
import ErrorView from "../ErrorView/ErrorView";
import Categories from "../Сategories/Сategories";

function Сategories() {
  const { category, activCategory, loading, error } = useSelector(
    (store) => store.categoriesSlice
  );
  const dispatch = useDispatch();
  const filterCatalogHandle = (id) => {
    dispatch(categoriesActions.setActivCategory(id));
    dispatch(filterCategory());
  };

  useEffect(() => {
    dispatch(fetchCategoryItems());
  }, [dispatch]);

  return (
    <ul className="catalog-categories nav justify-content-center">
      {loading === "loading" ? (
        <div className="categories_Preloader">{<Preloader />}</div>
      ) : null}
      {error ? <ErrorView>ОЙ....Ошибка загрузки категорий</ErrorView> : null}
      {!error && (
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
      )}

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
  );
}

export default Сategories;
