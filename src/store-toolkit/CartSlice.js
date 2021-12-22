import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
//action={type:"",payload:""}

const cart = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const { id, size, amount, price } = action.payload;
      const index = state.items.findIndex((item) => {
        if (item.id === id && item.size === size) {
          return true;
        }
      });
      if (index > -1) {
        state.items[index].amount = +state.items[index].amount + +amount;
        state.items[index].price = price;
      } else {
        state.items.push({ ...action.payload });
      }
    },
    delItem(state, action) {
      const { id, size } = action.payload;
      state.items = state.items.filter((item) => {
        if (item.id !== id || item.size !== size) {
          return true;
        }
      });
    },
  },
});

export const cartActions = cart.actions;
export default cart.reducer;
