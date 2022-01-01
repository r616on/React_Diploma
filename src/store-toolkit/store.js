import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import TopSales from "./TopSalesSlice";
import CatalogSlice from "./CatalogSlice";
import categoriesSlice from "./CategoriesSlice";
import search from "./SearchSlice";
import productDescription from "./ProductDescriptionSlice";
import cart from "./CartSlice";
import order from "./OrderSlice";

const rootReducer = combineReducers({
  TopSales,
  CatalogSlice,
  categoriesSlice,
  search,
  productDescription,
  cart,
  order,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
