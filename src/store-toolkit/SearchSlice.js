import { createSlice } from "@reduxjs/toolkit";

const initialState = { form: { name: "" }, searchHeader: false };
//action={type:"",payload:""}

const search = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    changeFormValue(state, action) {
      const { fild, value } = action.payload;
      state.form = { ...state.form, [fild]: value };
    },
    initForm(state, action) {
      return initialState;
    },
    setSearchHeader(state, action) {
      state.searchHeader = action.payload;
    },
  },
});

export const searchActions = search.actions;
export default search.reducer;
