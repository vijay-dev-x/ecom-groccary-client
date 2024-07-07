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
      const product = action.payload;
      const exists = state.cartProduct.find((item) => item._id === product._id);
      if (!exists) {
        state.cartProduct = [...state.cartProduct, action.payload];
      }
    },
    setRemoveCart: (state, action) => {
      const product = action.payload;
      state.cartProduct = state.cartProduct.filter(
        (item) => item._id !== product._id
      );
    },
    updateCartQuantity: (state, action) => {
      const product = action.payload;
      const productIndex = state.cartProduct.findIndex(
        (item) => item._id === product._id
      );
      if (productIndex >= 0) {
        state.cartProduct[productIndex].quantity = product.quantity;
      }
    },
  },
});

export const {
  setProducts,
  setCardProducts,
  setRemoveCart,
  updateCartQuantity,
} = productSlice.actions;

export default productSlice.reducer;
