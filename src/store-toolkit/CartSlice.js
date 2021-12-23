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
      const { id, size, count, price } = action.payload;
      // eslint-disable-next-line
      const index = state.items.findIndex((item) => {
        if (item.id === id && item.size === size) {
          return true;
        }
      });
      if (index > -1) {
        state.items[index].count = +state.items[index].count + +count;
        state.items[index].price = price;
      } else {
        state.items.push({ ...action.payload });
      }
    },
    delItem(state, action) {
      const { id, size } = action.payload;
      // eslint-disable-next-line
      state.items = state.items.filter((item) => {
        if (item.id !== id || item.size !== size) {
          return true;
        }
      });
    },
    initCart(state, action) {
      return initialState;
    },
  },
});

export const cartActions = cart.actions;
export default cart.reducer;
