import { configureStore } from "@reduxjs/toolkit";
import TopSales from "./TopSalesSlice";
import CatalogSlice from "./CatalogSlice";
import search from "./SearchSlice";
import productDescription from "./ProductDescriptionSlice";
import cart from "./CartSlice";

export default configureStore({
  reducer: {
    TopSales,
    CatalogSlice,
    search,
    productDescription,
    cart,
  },
});
