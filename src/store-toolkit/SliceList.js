import { createSlice } from "@reduxjs/toolkit";

const adres = "https://react-home-works-redux-thunk.herokuapp.com";
// const adres = "http://localhost";
const port = "";
const url = `${adres}:${port}/api`;

const initialState = {
  services: [
    { id: 1, name: "Замена стекла", price: 21000 },
    { id: 2, name: "Замена дисплея", price: 25000 },
  ],
  loading: "idel",
  error: false,
  url: url,
};
//action={type:"",payload:""}

const listSlice = createSlice({
  name: "listSlice",
  initialState: initialState,
  reducers: {
    dellItem(state, action) {
      const id = action.payload;
      state.services = state.services.filter((item) => item.id !== id);
    },
    getItem(state, action) {
      state.services = [...action.payload];
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { dellItem, getItem, setError, setLoading } = listSlice.actions;
export default listSlice.reducer;
