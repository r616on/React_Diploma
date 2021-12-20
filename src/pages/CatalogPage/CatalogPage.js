import React from "react";
import Cart from "../../components/Cart/Cart";
import Catalog from "../../components/Catalog/Catalog";
import Order from "../../components/Order/Order";
import IndexTemplate from "../../templates/IndexTemplate/IndexTemplate";
import "./desktop.scss";

function CatalogPage() {
  return (
    <IndexTemplate>
      <Catalog />
    </IndexTemplate>
  );
}

export default CatalogPage;
