import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./redux/slicer";

export default function App() {
  // const selectorProducts = useSelector((state) => state.store.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/product/all`
      );
      dispatch(setProducts(res.data.products));
    } catch (error) {
      console.log("home all eroor", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    // console.log("selectorProduts", selectorProducts);
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <main className=" mt-[2rem] px-5">
        <Outlet></Outlet>
      </main>
    </div>
  );
}
