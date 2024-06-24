import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCardProducts } from "../redux/slicer";

export default function SingleCart({ value }) {
  const dispatch = useDispatch();
  const cartHandler = (item) => {
    dispatch(setCardProducts(item));
  };
  return (
    <div className=" flex flex-col border gap-1 w-[250px]  min-h-[250px] p-3 rounded-sm shadow-md">
      <Link
        to={`/manu/${value._id}`}
        className=" flex justify-center flex-col items-center h-full w-full"
      >
        <img className=" h-[90%] w-[90%]" src={value.image} alt="" />
        <p className=" text-gray-600/80">{value.category}</p>
      </Link>
      <div>
        <p className=" text-neutral-800 text-center text-lg font-semibold">
          {value.name}
        </p>
        <div className=" flex px-2 items-center justify-between mt-2">
          <p className=" text-green-700 text-[18px] font-bold">
            &#8377; {value.price}
          </p>
          {/* <Link to={`manu/${value._id}`}>
          </Link> */}
          <button
            onClick={() => cartHandler(value)}
            className=" py-1 px-3 hover:bg-green-700  bg-green-600 rounded text-white font-semibold "
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
