import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./desktop.scss";
import { searchActions } from "../../store-toolkit/SearchSlice";
import { searchCatalogFetch } from "../../store-toolkit/SearchThunk";

function Search({ header }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form } = useSelector((store) => store.search);

  // useEffect(() => {
  //   return () => {
  //     dispatch(searchActions.initForm());
  //   };
  // }, [dispatch]);

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    dispatch(searchActions.changeFormValue({ fild: name, value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchCatalogFetch(header, navigate));
  };
  return (
    <form
      className={
        header
          ? "header-controls-search-form form-inline"
          : "catalog-search-form form-inline"
      }
      onSubmit={handleSubmit}
    >
      <input
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
        className="form-control"
        placeholder="Поиск"
      />
    </form>
  );
}

export default Search;
