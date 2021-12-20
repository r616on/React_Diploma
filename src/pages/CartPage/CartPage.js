import React from "react";
import Cart from "../../components/Cart/Cart";
import Order from "../../components/Order/Order";
import IndexTemplate from "../../templates/IndexTemplate/IndexTemplate";
import "./desktop.scss";

function CartPage() {
  return (
    <IndexTemplate>
      <Cart />
      <Order />
    </IndexTemplate>
  );
}

export default CartPage;
