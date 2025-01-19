import { createSlice } from "@reduxjs/toolkit";
import { allProducts, createProduct, DeleteProduct } from "./ProductApiSlice";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoader: false,
    errorMessage: null,
  },
  reducers: {
    loader: (state) => {
      state.isLoader = true;
    },
    loaderOff: (state) => {
      state.isLoader = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(allProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoader = false;
      })
      .addCase(allProducts.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(allProducts.rejected, (state) => {
        state.isLoader = false;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
        state.isLoader = false;
      })
      .addCase(createProduct.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(createProduct.rejected, (state) => {
        state.isLoader = false;
      })
      .addCase(DeleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (item) => item.id !== action.payload
        );
        state.isLoader = false;
      })
      .addCase(DeleteProduct.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(DeleteProduct.rejected, (state) => {
        state.isLoader = false;
      });
  },
});

export const { loader, loaderOff } = ProductSlice.actions;

export default ProductSlice.reducer;
