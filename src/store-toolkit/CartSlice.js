import { createSlice } from "@reduxjs/toolkit";

const adres = "https://react-diploma--backend.herokuapp.com";
//const adres = "http://localhost";
// http://localhost:7070/api/top-sales

const port = "";
const url = `${adres}:${port}`;

const initialState = {
  items: [],
  loading: "loading",
  error: false,
  url: url,
  activSize: "",
  amount: 1,
};
//action={type:"",payload:""}

const cart = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const { id, title, size, amount, price } = action.payload;
      // state.items.map((item) => {
      //   if (item.id === id && item.size === size) {
      //     item.amount = +item.amount + +amount;
      //   }
      // });
      const index = state.items.findIndex((item) => {
        if (item.id === id && item.size === size) {
          return true;
        }
      });
      console.log(index);
      if (index > -1) {
        state.items[index].amount = +state.items[index].amount + +amount;
      } else {
        state.items.push({ ...action.payload });
      }
    },
    initCart(state, action) {
      return initialState;
    },
    setItem(state, action) {
      state.items = action.payload;
    },

    setError(state, action) {
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const cartActions = cart.actions;
export default cart.reducer;
