import React from "react";
import Catalog from "../../components/Catalog/Catalog";
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
