import { configureStore } from "@reduxjs/toolkit";
import TopSales from "./TopSalesSlice";
import CatalogSlice from "./CatalogSlice";
import search from "./SearchSlice";
import productDescription from "./ProductDescriptionSlice";

export default configureStore({
  reducer: {
    TopSales,
    CatalogSlice,
    search,
    productDescription,
  },
});
