import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItemsTopSales } from "../../store-toolkit/TopSalesThunk";
import "./desktop.scss";
import Card from "../Card/Card";
import Preloader from "../Preloader/Preloader";
import ErrorView from "../ErrorView/ErrorView";

function TopSales() {
  const { items, loading, error } = useSelector((store) => store.TopSales);
  const dispatch = useDispatch();
  const [itemsPerline, steItemsPerline] = useState(2);
  useEffect(() => {
    dispatch(fetchItemsTopSales());
  }, [dispatch]);

  useEffect(() => {
    const screenWidth = window.screen.width;
    if (screenWidth > 992) {
      steItemsPerline(3);
    } else {
      steItemsPerline(2);
    }
  }, []);

  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {loading === "loading" ? <Preloader /> : null}
      {error ? <ErrorView>Ошибка загрузки данных</ErrorView> : null}
      {loading === "idel" && items.length > 0 ? (
        <div className="row gy-5">
          {items
            .filter((item, index) => index < itemsPerline)
            .map((item) => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  category={item.category}
                  title={item.title.slice(0, 27)}
                  price={item.price}
                  images={item.images[0]}
                />
              );
            })}
        </div>
      ) : null}
    </section>
  );
}

export default TopSales;
