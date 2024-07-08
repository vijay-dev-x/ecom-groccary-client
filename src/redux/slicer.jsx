import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartProduct: [],
};

export const productSlice = createSlice({
  name: "productsSlicer",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCardProducts: (state, action) => {
      const item = state.cartProduct.find(
        (product) => product._id === action.payload._id
      );
      if (item) {
        item.quantity += 1;
      } else {
        state.cartProduct.push({ ...action.payload, quantity: 1 });
      }
    },
    setRemoveCart: (state, action) => {
      const product = action.payload;
      state.cartProduct = state.cartProduct.filter(
        (item) => item._id !== product._id
      );
    },
    setUpdateQuantity: (state, action) => {
      const item = state.cartProduct.find(
        (product) => product._id === action.payload._id
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const {
  setProducts,
  setCardProducts,
  setRemoveCart,
  setUpdateQuantity,
} = productSlice.actions;

export default productSlice.reducer;
