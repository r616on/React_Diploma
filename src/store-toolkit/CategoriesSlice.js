import { createSlice } from "@reduxjs/toolkit";
import { url } from "../config";

const initialState = {
  category: [
    // { id: 12, title: "Мужская обувь" },
    // { id: 13, title: "Женская обувь" },
  ],
  activCategory: "all",
  url: url,
  requestStatus: {
    loading: false,
    ok: false,
    error: false,
  },
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

    setRequestStatus(state, action) {
      state.requestStatus = action.payload;
    },
  },
});

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice.reducer;
