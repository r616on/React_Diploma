import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchItemsTopSales } from "../../store-toolkit/TopSalesThunk";
import "./desktop.scss";
import Card from "../Card/Card";
import Preloader from "../Preloader/Preloader";

function TopSales() {
  const { items, loading, error } = useSelector((store) => store.TopSales);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItemsTopSales());
  }, []);
  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {loading === "loading" ? (
        <Preloader />
      ) : items.length > 0 ? (
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
              />
            );
          })}
        </div>
      ) : null}
    </section>
  );
}

export default TopSales;
