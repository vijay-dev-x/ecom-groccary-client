import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slicer";

export const store = configureStore({
  reducer: {
    store: productSlice,
  },
});
