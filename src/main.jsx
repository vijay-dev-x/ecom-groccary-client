import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router.jsx";
import { Toaster } from "react-hot-toast";
import { store } from "./redux/store.jsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster></Toaster>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
