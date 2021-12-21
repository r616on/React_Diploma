import React from "react";
import Catalog from "../../components/Catalog/Catalog";
import TopSales from "../../components/TopSales/TopSales";
import IndexTemplate from "../../templates/IndexTemplate/IndexTemplate";

function Index() {
  return (
    <IndexTemplate>
      <TopSales />
      <Catalog index />
    </IndexTemplate>
  );
}

export default Index;
