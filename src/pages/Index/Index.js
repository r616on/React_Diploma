import React from "react";
import Catalog from "../../components/Catalog/Catalog";
import TopSales from "../../components/TopSales/TopSales";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";

function Index() {
  return (
    <PageTemplate>
      <TopSales />
      <Catalog index />
    </PageTemplate>
  );
}

export default Index;
