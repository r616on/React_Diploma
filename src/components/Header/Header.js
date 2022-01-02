import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./desktop.scss";
import logo from "../../img/header-logo.png";
import Search from "../Search/Search";

import topMenuItems from "./data.json";

function Header() {
  const items = useSelector((store) => store.cart.items);
  const [menuTogle, setMenuTogle] = useState(false);
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid navbar__row">
              <Link to={"/"} className="navbar-brand logo__pic ">
                <img className="logo__pic__img" src={logo} alt="Bosa Noga" />
              </Link>

              <ul className="navbar-nav nav__items__row">
                {topMenuItems.map((item) => {
                  return (
                    <li key={item.title} className="nav-item">
                      <NavLink end to={item.route} className="nav-link">
                        {item.title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <div className="header-controls__row ">
                <div className="search__pic">
                  <Search header />
                </div>
                <div className="header-controls-pics cart__pic">
                  <Link
                    to={"/cart"}
                    className="header-controls-pic header-controls-cart"
                  >
                    {items.length > 0 && (
                      <div className="header-controls-cart-full">
                        {items.length}
                      </div>
                    )}
                    <div className="header-controls-cart-menu"></div>
                  </Link>
                </div>
                <button
                  onClick={() => setMenuTogle(!menuTogle)}
                  className="navbar-toggler "
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
            {menuTogle && (
              <div className="navbar__row__mobile">
                <div className="search__mobile__menu">
                  <Search mobile />
                </div>

                <ul className="navbar__mobile__list">
                  {topMenuItems.map((item) => {
                    return (
                      <li key={item.title} className="nav-item">
                        <NavLink end to={item.route} className="nav-link">
                          {item.title}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
