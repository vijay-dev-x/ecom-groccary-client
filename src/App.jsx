import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./redux/slicer";

export default function App() {
  const selectorProducts = useSelector((state) => state.store.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:8000/api/product/all");
    // console.log("products", res);
    dispatch(setProducts(res.data.products));
  };

  useEffect(() => {
    fetchProducts();
    console.log("selectorProduts", selectorProducts);
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <main className=" mt-20 px-5">
        <Outlet></Outlet>
      </main>
    </div>
  );
}
