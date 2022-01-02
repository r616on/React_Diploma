import React from "react";
import Cart from "../../components/Cart/Cart";
import Order from "../../components/Order/Order";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import "./desktop.scss";

function CartPage() {
  return (
    <PageTemplate>
      <Cart />
      <Order />
    </PageTemplate>
  );
}

export default CartPage;
