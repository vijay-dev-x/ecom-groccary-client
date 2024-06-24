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
  },
});

export const { setProducts, setCardProducts, setRemoveCart } =
  productSlice.actions;

export default productSlice.reducer;
