import React, { useEffect } from "react";
import "./desktop.scss";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  filterCategory,
  offsetCatalogFetch,
} from "../../store-toolkit/CatalogThunk";
import { catalogActions } from "../../store-toolkit/CatalogSlice";
import Card from "../Card/Card";
import Search from "../Search/Search";
import Preloader from "../Preloader/Preloader";
import ErrorView from "../ErrorView/ErrorView";
import Categories from "../Сategories/Сategories";

function Catalog({ index }) {
  const { items, offsetActive, loading, error } = useSelector(
    (store) => store.CatalogSlice
  );
  const location = useLocation();
  const navigate = useNavigate();

  const { activCategory } = useSelector((store) => store.categoriesSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterCategory());
    return () => {
      dispatch(catalogActions.initCatalog());
    };
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    dispatch(catalogActions.initOffset());
    if (!offsetActive) {
      dispatch(catalogActions.setOffsetActive(true));
    }
    // eslint-disable-next-line
  }, [activCategory]);
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {!index && <Search catalog />}
      <Categories />
      <div className="catalog__row row">
        {loading === "loading" || error ? (
          <div className="catalog_Preloader">
            {loading === "loading" ? <Preloader big /> : null}
            {error ? <ErrorView>ОЙ....Ошибка загрузки данных</ErrorView> : null}
          </div>
        ) : null}
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
        {!(items.length < 6) && offsetActive ? (
          <button
            onClick={() => {
              dispatch(offsetCatalogFetch(navigate, location));
            }}
            className="btn btn-outline-primary"
          >
            Загрузить ещё
          </button>
        ) : null}
      </div>
    </section>
  );
}

export default Catalog;
