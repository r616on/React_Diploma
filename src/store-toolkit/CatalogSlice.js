import { createSlice } from "@reduxjs/toolkit";

const adres = "https://react-diploma--backend.herokuapp.com";
//const adres = "http://localhost";
// http://localhost:7070/api/top-sales

const port = "";
const url = `${adres}:${port}`;

const initialState = {
  items: [
    {
      id: 65,
      category: 15,
      title: "Босоножки 'Keira'",
      price: 7600,
      images: [
        "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_keira.jpg",
        "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_keira_2.jpg",
      ],
    },
    {
      id: 66,
      category: 13,
      title: "Босоножки 'Myer' с завязкой на щиколотке",
      price: 34000,
      images: [
        "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_myer.jpg",
        "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_myer_2.jpg",
      ],
    },
    // {
    //   id: 73,
    //   category: 15,
    //   title: "Супергеройские кеды",
    //   price: 1400,
    //   images: [
    //     "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/superhero_sneakers.jpg",
    //   ],
    // },
  ],
  category: [
    { id: 12, title: "Мужская обувь" },
    { id: 13, title: "Женская обувь" },
  ],
  activCategory: "all",
  offset: 6,
  offsetActive: true,
  loading: "idel",
  error: false,
  url: url,
};
//action={type:"",payload:""}

const CatalogSlice = createSlice({
  name: "CatalogSlice",
  initialState: initialState,
  reducers: {
    setOffsetActive(state, action) {
      state.offsetActive = action.payload;
    },
    nextOffset(state, action) {
      state.offset = +state.offset + 6;
    },
    initOffset(state, action) {
      state.offset = 6;
    },
    setActivCategory(state, action) {
      state.activCategory = action.payload;
    },
    setItems(state, action) {
      state.items = [...action.payload];
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

export const catalogActions = CatalogSlice.actions;
export default CatalogSlice.reducer;
