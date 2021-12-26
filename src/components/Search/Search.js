import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./desktop.scss";
import { searchActions } from "../../store-toolkit/SearchSlice";
import { searchCatalogFetch } from "../../store-toolkit/SearchThunk";

function Search({ catalog, mobile }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form } = useSelector((store) => store.search);
  const [searchActiv, setSearchActiv] = useState(false);

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
    setSearchActiv(false);
    dispatch(searchCatalogFetch(navigate, catalog));
  };
  return (
    <form
      className={`${mobile && "active"} ${catalog && "active"} search ${
        searchActiv ? "active" : ""
      } `}
      onSubmit={handleSubmit}
    >
      <div
        onClick={() => {
          if (searchActiv) {
            if (form.name) {
              dispatch(searchCatalogFetch(navigate, catalog));
            }
            setSearchActiv(false);
          } else {
            setSearchActiv(true);
          }
        }}
        className="search__icon"
      ></div>
      <input
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
        className="form-control search__input"
        placeholder="Поиск"
      />
    </form>
  );
}

export default Search;
