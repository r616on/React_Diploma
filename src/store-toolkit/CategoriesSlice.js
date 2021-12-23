import { createSlice } from "@reduxjs/toolkit";
import { url } from "../config";

const initialState = {
  category: [
    // { id: 12, title: "Мужская обувь" },
    // { id: 13, title: "Женская обувь" },
  ],
  activCategory: "all",
  loading: "loading",
  error: false,
  url: url,
};
//action={type:"",payload:""}

const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState: initialState,
  reducers: {
    setActivCategory(state, action) {
      state.activCategory = action.payload;
    },

    setCategory(state, action) {
      state.category = [...action.payload];
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice.reducer;
