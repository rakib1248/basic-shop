import { configureStore } from "@reduxjs/toolkit";
import products from "./feauther/product/ProductSlice";

const store = configureStore({
  reducer: {
    products: products,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
