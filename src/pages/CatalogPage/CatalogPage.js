import React from "react";
import Catalog from "../../components/Catalog/Catalog";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import "./desktop.scss";

function CatalogPage() {
  return (
    <PageTemplate>
      <Catalog />
    </PageTemplate>
  );
}

export default CatalogPage;
