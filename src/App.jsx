import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./redux/slicer";
import { Loader } from "lucide-react";

export default function App() {
  const selectorProducts = useSelector((state) => state.store.products);
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
    console.log("selectorProduts", selectorProducts);
  }, []);
  const loading = selectorProducts.length === 0 ? true : false;

  return (
    <div>
      <Navbar></Navbar>
      {loading ? (
        <div className="flex h-screen w-screen flex-col gap-5 items-center justify-center bg-white">
          <div className="flex space-x-2">
            <div className="h-10 w-10 rounded-full bg-green-500 animate-ping duration-200"></div>
            <div className="h-10 w-10 rounded-full bg-green-500 animate-ping animation-delay-200"></div>
            <div className="h-10 w-10 rounded-full bg-green-500 animate-ping animation-delay-400"></div>
          </div>
          <div className=" text-black/70 text-lg  font-semibold">
            Loading...
          </div>
        </div>
      ) : (
        <main className=" mt-[2rem] px-5">
          <Outlet></Outlet>
        </main>
      )}
    </div>
  );
}
