import React from "react";
import IndexTemplate from "../../templates/IndexTemplate/IndexTemplate";
import "./desktop.scss";
import { useParams } from "react-router-dom";
import ProductDescription from "../../components/ProductDescription/ProductDescription";

function ProductPage() {
  const params = useParams();
  return (
    <IndexTemplate>
      <ProductDescription id={params.id} />
    </IndexTemplate>
  );
}

export default ProductPage;
