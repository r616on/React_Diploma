import { configureStore } from "@reduxjs/toolkit";
import TopSales from "./TopSalesSlice";
import CatalogSlice from "./CatalogSlice";
import search from "./SearchSlice";

export default configureStore({
  reducer: {
    TopSales,
    CatalogSlice,
    search,
  },
});
