import { createSlice } from "@reduxjs/toolkit";

const initialState = { form: { name: "", price: "", content: "" } };

//action={type:"",payload:""}

export const formSlice = createSlice({
  name: "formSlice",
  initialState: initialState,
  reducers: {
    changeFormValue(state, action) {
      const { fild, value } = action.payload;
      state.form = { ...state.form, [fild]: value };
    },
    changeFormInItem(state, action) {
      state.form = { ...action.payload };
    },
  },
});

export const { changeFormValue, formInit, changeFormInItem } =
  formSlice.actions;
export default formSlice.reducer;
