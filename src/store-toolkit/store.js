import { configureStore } from "@reduxjs/toolkit";
import TopSales from "./TopSalesSlice";
import CatalogSlice from "./CatalogSlice";

export default configureStore({
  reducer: {
    TopSales,
    CatalogSlice,
  },
});
