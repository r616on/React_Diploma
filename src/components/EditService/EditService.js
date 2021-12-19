import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchItemFormThunked,
  fetchEditItemThunked,
} from "../../store-toolkit/SliceActionCreators";
import { changeFormValue } from "../../store-toolkit/SliceForm";
import "./desktop.scss";

function EditService() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((store) => store.listSlice);
  const form = useSelector((store) => store.formSlice.form);
  const params = useParams();
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    dispatch(changeFormValue({ fild: name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchEditItemThunked(params.id, navigate));
  };

  useEffect(() => {
    dispatch(fetchItemFormThunked(params.id));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="EditService">
      {loading === "loading" ? (
        <div className="EditService-Loading"></div>
      ) : null}
      {
        <form className="Editing-form-row" onSubmit={handleSubmit}>
          <label className="EditService-lablel">
            Название
            <input
              className="form-item"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
            />
          </label>

          <label className="EditService-lablel">
            Стоимость
            <input
              className="form-item"
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
            />
          </label>

          <label className="EditService-lablel">
            Описание
            <input
              className="form-item"
              name="content"
              type="text"
              value={form.content}
              onChange={handleChange}
            />
          </label>
          <div className="EditService-control">
            <Link to="/" className="form-item control ">
              Отмена
            </Link>
            <input
              className="form-item control"
              type="submit"
              value="Сохранить"
            />
          </div>
        </form>
      }
      {error && <div className="error">Произошла ошибка</div>}
    </div>
  );
}

export default EditService;
