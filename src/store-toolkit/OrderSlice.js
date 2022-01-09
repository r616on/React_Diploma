import { createSlice } from "@reduxjs/toolkit";
import { url } from "../config";

const initialState = {
  form: { phone: "", address: "", agreement: false },
  success: false,
  url: url,
  requestStatus: {
    loading: false,
    ok: false,
    error: false,
  },
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
    setSuccess(state, action) {
      state.success = action.payload;
    },
    setRequestStatus(state, action) {
      state.requestStatus = action.payload;
    },
  },
});

export const orderActions = order.actions;
export default order.reducer;
