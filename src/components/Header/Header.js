import React from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./desktop.scss";
import logo from "../../img/header-logo.png";
import Search from "../Search/Search";
import { searchActions } from "../../store-toolkit/SearchSlice";
import { searchCatalogFetch } from "../../store-toolkit/SearchThunk";
import topMenuItems from "./data.json";

function Header() {
  const { searchHeader, form } = useSelector((store) => store.search);
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid justify-content-md-end">
              <Link to={"/"} className="navbar-brand ">
                <img src={logo} alt="Bosa Noga" />
              </Link>
              <div className="d-flex  header-controls__row flex-fill justify-content-md-end  order-lg-3">
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
                    {items.length > 0 && (
                      <div className="header-controls-cart-full">
                        {items.length}
                      </div>
                    )}
                    <div className="header-controls-cart-menu"></div>
                  </NavLink>
                </div>
                {searchHeader && <Search header />}
              </div>
              <button
                className="navbar-toggler "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-fill">
                  {topMenuItems.map((item) => {
                    return (
                      <li key={item.title} className="nav-item">
                        <NavLink to={item.route} className="nav-link">
                          {item.title}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

//  <div className="col">
//    <nav className="navbar navbar-expand-sm navbar-light bg-light">
//      <Link to={"/"} className="navbar-brand">
//        <img src={logo} alt="Bosa Noga" />
//      </Link>
//      <div className="collapase navbar-collapse" id="navbarMain">
//        <ul className="navbar-nav mr-auto">
//          {topMenuItems.map((item) => {
//            return (
//              <li key={item.title} className="nav-item">
//                <NavLink to={item.route} className="nav-link">
//                  {item.title}
//                </NavLink>
//              </li>
//            );
//          })}
//        </ul>
//        <div>
//          <div className="header-controls-pics">
//            <div
//              onClick={() => {
//                dispatch(searchActions.setSearchHeader(!searchHeader));
//                if (form.name && searchHeader) {
//                  dispatch(searchCatalogFetch(true, navigate));
//                }
//              }}
//              className="header-controls-pic header-controls-search"
//            ></div>

//            <NavLink
//              to={"/cart"}
//              className="header-controls-pic header-controls-cart"
//            >
//              {items.length > 0 && (
//                <div className="header-controls-cart-full">{items.length}</div>
//              )}
//              <div className="header-controls-cart-menu"></div>
//            </NavLink>
//          </div>
//          {searchHeader && <Search header />}
//        </div>
//      </div>
//    </nav>
//  </div>;
