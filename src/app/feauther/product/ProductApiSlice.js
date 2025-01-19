import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../utils/api";

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (data) => {
    try {
      const response = await API.post("/products", data);
      return response.data;
    } catch (error) {
      return error.massege;
    }
  }
);
// Delete Product
export const DeleteProduct = createAsyncThunk(
  "product/DeleteProduct",
  async (id) => {
    try {
      await API.delete(`/products/${id}`);
      return id;
    } catch (error) {
      return error.massege;
    }
  }
);

// Lode All Products

export const allProducts = createAsyncThunk("product/allProducts", async () => {
  try {
    const response = await API.get("/products");
    return response.data;
  } catch (error) {
    return error.massege;
  }
});
