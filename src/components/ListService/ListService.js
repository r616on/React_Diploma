import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Service from "../Service/Service";
import "./desktop.scss";
import { fetchItemsThunked } from "../../store-toolkit/SliceActionCreators";

function ListService() {
  const { services, loading, error } = useSelector((store) => store.listSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItemsThunked());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="ListService">
      <div className="ListService-row">
        {services.map((item) => {
          return (
            <Service
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
      {loading === "loading" ? <div className="loader">LOADING...</div> : null}
      {error && <div className="error">Произошла ошибка</div>}
    </div>
  );
}

export default ListService;
