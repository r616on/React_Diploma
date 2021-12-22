import React from "react";
import { Link, useParams, useNavigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./desktop.scss";
import logo from "../../img/header-logo.png";
import Search from "../Search/Search";
import { searchActions } from "../../store-toolkit/SearchSlice";
import { searchCatalogFetch } from "../../store-toolkit/SearchThunk";

function Header() {
  const { searchHeader, form } = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Bosa Noga" />
            </a>
            <div className="collapase navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink to={"/"} className="nav-link">
                    Главная
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/catalog"} className="nav-link">
                    Каталог
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/about"} className="nav-link">
                    О магазине
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/contacts"} className="nav-link">
                    Контакты
                  </NavLink>
                </li>
              </ul>
              <div>
                <div className="header-controls-pics">
                  <div
                    onClick={() => {
                      dispatch(searchActions.setSearchHeader(!searchHeader));
                      if (form.name && searchHeader) {
                        dispatch(searchCatalogFetch(true, navigate));
                      }
                    }}
                    className="header-controls-pic header-controls-search"
                  ></div>

                  <NavLink
                    to={"/cart"}
                    className="header-controls-pic header-controls-cart"
                  >
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu"></div>
                  </NavLink>
                </div>
                {searchHeader && <Search header />}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
