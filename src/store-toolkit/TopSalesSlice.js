import { createSlice } from "@reduxjs/toolkit";
import { url } from "../config";

const initialState = {
  items: [],
  loading: "loading",
  error: false,
  url: url,
};
//action={type:"",payload:""}

const TopSales = createSlice({
  name: "TopSales",
  initialState: initialState,
  reducers: {
    setItems(state, action) {
      state.items = [...action.payload];
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const topSalesActons = TopSales.actions;
export default TopSales.reducer;
