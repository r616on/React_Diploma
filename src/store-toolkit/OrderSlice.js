import { createSlice } from "@reduxjs/toolkit";
import { url } from "../config";

const initialState = {
  form: { phone: "", address: "", agreement: false },
  loading: "idel",
  error: false,
  success: false,
  url: url,
};

//action={type:"",payload:""}

const order = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    changeValue(state, action) {
      const { fild, value } = action.payload;
      state.form = { ...state.form, [fild]: value };
    },
    initForm(state, action) {
      state.form = { phone: "", address: "", agreement: false };
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setSuccess(state, action) {
      state.success = action.payload;
    },
  },
});

export const orderActions = order.actions;
export default order.reducer;
