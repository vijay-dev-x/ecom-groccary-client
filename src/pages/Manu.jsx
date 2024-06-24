import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Carts from "../components/Carts";
import { Undo2 } from "lucide-react";
import { setCardProducts } from "../redux/slicer";

export default function Manu() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectorCart = useSelector((state) => state.store.cartProduct);
  const selectorProducts = useSelector((state) => state.store.products);
  const cartHandler = (item) => {
    // console.log("item cart", item);
    dispatch(setCardProducts(item));
  };
  console.log("cart product", selectorCart);
  return (
    <div className=" container mx-auto">
      <Link
        to={"/"}
        className=" absolute top-20 left-10 text-gray-700/80  cursor-pointer"
      >
        <Undo2></Undo2>
      </Link>
      <div>
        {selectorProducts
          ?.filter((value) => value._id === id)
          .map((item) => (
            <div
              key={item._id}
              className=" flex flex-col justify-between md:flex-row gap-10 mt-20 md:items-center"
            >
              <div className=" h-full flex justify-center items-center w-full md:w-[50%]">
                <img
                  className=" h-[90%] max-w-[300px] max-h-[300px] w-[90%]"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className=" md:w-[45%]  flex flex-col gap-2">
                <h1 className=" font-bold text-3xl md:text-5xl">{item.name}</h1>
                <p className=" text-lg md:text-xl text-gray-600/80">
                  Category : {item.category}
                </p>
                <p className=" font-semibold text-2xl text-gray-600/p80">
                  Selling Price :
                  <span className=" mx-2  text-green-700">
                    &#8377;{item.price}
                  </span>
                </p>
                <button
                  onClick={() => cartHandler(item)}
                  className=" mt-4 hover:bg-green-600 text-white bg-green-500 rounded w-full text-center font-semibold py-2"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
      </div>
      <div>
        <Carts data={selectorProducts} text={"Smiller Products"}></Carts>
      </div>
    </div>
  );
}
