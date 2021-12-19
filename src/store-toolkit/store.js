import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./SliceList";
import formSlice from "./SliceForm";

export default configureStore({
  reducer: {
    listSlice,
    formSlice,
  },
});
