import React from "react";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import "./desktop.scss";
import { useParams } from "react-router-dom";
import ProductDescription from "../../components/ProductDescription/ProductDescription";

function ProductPage() {
  const params = useParams();
  return (
    <PageTemplate>
      <ProductDescription id={params.id} />
    </PageTemplate>
  );
}

export default ProductPage;
