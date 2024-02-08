import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getAllproducts = createAsyncThunk(
  "products/AllProducts",
  async () => {
    const response = await fetch("http://localhost:3333/products/all");
    const data = await response.json();
    return data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    basket: localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : [],
    productsList: [],
    status: null,
    error: null,
  },
  reducers: {
    addToBasket(state, action) {
      state.basket = [
        ...state.basket,
        state.productsList.filter((item) => item.id === action.payload),
      ];
      localStorage.setItem("products", JSON.stringify(state.basket));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllproducts.pending, (state) => {
        state.status = "loading";
        state.error = "null";
      })
      .addCase(getAllproducts.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.productsList = action.payload;
      })
      .addCase(getAllproducts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = true;
      });
  },
});

export const { addToBasket } = productsSlice.actions;

export default productsSlice.reducer;
