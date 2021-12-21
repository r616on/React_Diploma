import { createSlice } from "@reduxjs/toolkit";

const adres = "https://react-diploma--backend.herokuapp.com";
//const adres = "http://localhost";
//  http://localhost:7070/api/top-sales

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

export const { setItems, setError, setLoading } = TopSales.actions;
export default TopSales.reducer;
