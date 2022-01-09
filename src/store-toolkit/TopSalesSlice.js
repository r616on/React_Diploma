import { createSlice } from "@reduxjs/toolkit";
import { url } from "../config";

const initialState = {
  items: [],
  url: url,
  requestStatus: {
    loading: false,
    ok: false,
    error: false,
  },
};
//action={type:"",payload:""}

const TopSales = createSlice({
  name: "TopSales",
  initialState: initialState,
  reducers: {
    setItems(state, action) {
      state.items = [...action.payload];
    },

    setRequestStatus(state, action) {
      state.requestStatus = action.payload;
    },
  },
});

export const topSalesActons = TopSales.actions;
export default TopSales.reducer;
