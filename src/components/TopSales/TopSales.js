import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchItemsTopSales } from "../../store-toolkit/TopSalesThunk";
import "./desktop.scss";
import Card from "../Card/Card";

function TopSales() {
  const { items, loading, error } = useSelector((store) => store.TopSales);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItemsTopSales());
  }, []);
  return items.length > 0 ? (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
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
    </section>
  ) : null;
}

export default TopSales;
