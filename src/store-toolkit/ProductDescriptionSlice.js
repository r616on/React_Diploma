import { createSlice } from "@reduxjs/toolkit";
import { url } from "../config";

const initialState = {
  item: {},
  url: url,
  activSize: "",
  count: 1,
  requestStatus: {
    loading: false,
    ok: false,
    error: false,
  },
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
    setRequestStatus(state, action) {
      state.requestStatus = action.payload;
    },
  },
});

export const productDescriptionActions = productDescription.actions;
export default productDescription.reducer;
