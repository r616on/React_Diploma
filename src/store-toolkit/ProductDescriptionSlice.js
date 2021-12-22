import { createSlice } from "@reduxjs/toolkit";

const adres = "https://react-diploma--backend.herokuapp.com";
//const adres = "http://localhost";
// http://localhost:7070/api/top-sales

const port = "";
const url = `${adres}:${port}`;

const initialState = {
  item: {},
  loading: "loading",
  error: false,
  url: url,
  activSize: "",
  count: 1,
};
//action={type:"",payload:""}

const productDescription = createSlice({
  name: "productDescription",
  initialState: initialState,
  reducers: {
    initProduct(state, action) {
      return initialState;
    },
    setItem(state, action) {
      state.item = action.payload;
    },
    setActivSize(state, action) {
      state.activSize = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    addCount(state, action) {
      if (+state.count < 10) {
        state.count = +state.count + 1;
      }
    },
    subtractCount(state, action) {
      if (+state.count > 1) {
        state.count = +state.count - 1;
      }
    },
  },
});

export const productDescriptionActions = productDescription.actions;
export default productDescription.reducer;
