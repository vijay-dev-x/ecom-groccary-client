// CartSidebar.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cross, X, XCircleIcon } from "lucide-react";
import { setRemoveCart } from "../redux/slicer";
import toast from "react-hot-toast";
const CartSidebar = ({ isOpen, toggleSidebar }) => {
  const selectorCart = useSelector((state) => state.store.cartProduct);
  const totalPrice = selectorCart.reduce((acc, item) => acc + item.price, 0);
  //   console.log("totelPrice", totalPrice);
  const dispatch = useDispatch();
  const removeItemHandler = (value) => {
    dispatch(setRemoveCart(value));
    toast.success("Item Removed");
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-80 md:w-96 z-50`}
      >
        <div className="flex justify-between p-4">
          <h1 className=" text-xl font-bold text-black/80">Your Cart items</h1>
          <button onClick={toggleSidebar} className="text-gray-700">
            <XCircleIcon className="h-6 w-6" />
          </button>
        </div>
        <div className=" p-3">
          <div className=" flex h-[100Vh] pb-[11rem] overflow-y-scroll flex-col gap-5">
            {selectorCart?.map((value) => (
              <div
                key={value._id}
                className=" relative flex gap-6 border-b rounded px-4 p-2"
              >
                <div className=" max-w-[100px] max-h-[100px]">
                  <img className=" h-full w-full" src={value.image} alt="" />
                </div>
                <div>
                  <h1 className=" text-lg">{value.name}</h1>
                  <p className=" text-gray-500">{value.category}</p>
                  <p className=" text-green-700 font-semibold ">
                    &#8377; {value.price}
                  </p>
                  <div
                    onClick={() => removeItemHandler(value)}
                    className=" hover:scale-110 transition-all absolute top-[-5px] right-[5px] text-red-700 cursor-pointer"
                  >
                    <X></X>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" w-full bg-white flex flex-col gap-2 py-2 fixed bottom-0">
            <div className=" flex justify-between mx-auto px-5">
              <p className=" text-xl"> Total price :</p>
              <p className=" text-xl mx-2 text-green-800 font-bold">
                &#8377; {totalPrice}
              </p>
            </div>
            <div>
              <button className=" w-[95%] mx-auto py-2 hover:bg-green-700 text-white font-semibold bg-green-600 rounded ">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </>
  );
};

export default CartSidebar;
