import { createSlice } from "@reduxjs/toolkit";

const url = process.env.REACT_APP_URL;

const initialState = {
  items: [],
  loading: "idel",
  error: false,
  url: url,
};
//action={type:"",payload:""}

const TopSales = createSlice({
  name: "TopSales",
  initialState: initialState,
  reducers: {
    // dellItem(state, action) {
    //   const id = action.payload;
    //   state.services = state.services.filter((item) => item.id !== id);
    // },
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
