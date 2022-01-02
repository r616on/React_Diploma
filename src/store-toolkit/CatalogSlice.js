import { createSlice } from "@reduxjs/toolkit";
import { url } from "../config";

const initialState = {
  items: [
    // {
    //   id: 65,
    //   category: 15,
    //   title: "Босоножки 'Keira'",
    //   price: 7600,
    //   images: [
    //     "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_keira.jpg",
    //     "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_keira_2.jpg",
    //   ],
    // },
    // {
    //   id: 66,
    //   category: 13,
    //   title: "Босоножки 'Myer' с завязкой на щиколотке",
    //   price: 34000,
    //   images: [
    //     "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_myer.jpg",
    //     "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_myer_2.jpg",
    //   ],
    // },
  ],
  offset: 6,
  offsetActive: true,
  loading: "loading",
  error: false,
  url: url,
};
//action={type:"",payload:""}

const CatalogSlice = createSlice({
  name: "CatalogSlice",
  initialState: initialState,
  reducers: {
    initCatalog(state, action) {
      return initialState;
    },
    setOffsetActive(state, action) {
      state.offsetActive = action.payload;
    },
    nextOffset(state, action) {
      state.offset = +state.offset + 6;
    },
    setOffset(state, action) {
      state.offset = action.payload;
    },
    initOffset(state, action) {
      state.offset = 6;
    },

    setItems(state, action) {
      state.items = [...action.payload];
    },
    setOffsetItems(state, action) {
      state.items = state.items.concat([...action.payload]);
    },

    setError(state, action) {
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const catalogActions = CatalogSlice.actions;
export default CatalogSlice.reducer;
