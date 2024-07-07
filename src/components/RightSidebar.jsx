import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { XCircleIcon } from "lucide-react";
import { setRemoveCart } from "../redux/slicer";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CartSidebar = ({ isOpen, toggleSidebar }) => {
  const selectorCart = useSelector((state) => state.store.cartProduct);
  const totalPrice = selectorCart.reduce((acc, item) => acc + item.price, 0);
  const [quantities, setQuantities] = useState(
    selectorCart.reduce((acc, item) => {
      acc[item._id] = 1;
      return acc;
    }, {})
  );
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const removeItemHandler = (value) => {
    dispatch(setRemoveCart(value));
    toast.success("Item Removed");
  };

  const incrementHandler = (item) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item._id]: (prevQuantities[item._id] || 1) + 1,
    }));
  };

  const decrementHandler = (item) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item._id]: (prevQuantities[item._id] || 1) - 1,
    }));
  };

  const checkoutHandler = async (amount, name) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/product/checkout`,
        { name, amount }
      );
      console.log("payment rs", res.data.order);

      if (!res.data) {
        throw new Error("Error in opening checkout");
      }

      const options = {
        key: "rzp_test_cbyH4f86zT04hm",
        amount: res.data.order.amount,
        currency: res.data.order.currency,
        name: "Acme Corp",
        description: "Test Transaction",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRHk5KmIOlDEE1jdShNCGvdVvvDyUvZpj4Bg&s",
        order_id: res.data.order.id,
        handler: async (response) => {
          // This function handles the successful payment
          const paymentData = {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          };

          try {
            const verifyRes = await axios.post(
              `${
                import.meta.env.VITE_API_URL
              }/api/product/payment-varification`,
              paymentData
            );
            navigate(`/success?payment_id=${response.razorpay_order_id}`);
          } catch (error) {
            console.error("Payment Verification Error:", error);
          }
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      let rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        navigate(`/failed`);
        // alert("Payment Failed: " + response.error.description);
        rzp1.close();
      });
      rzp1.open();
    } catch (error) {
      alert("Oops! Something went wrong.\nError in opening checkout");
      console.log("Error:", error);
    }
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
                  <div className="flex gap-2 py-1 px-2 border justify-between w-[7rem] mt-1 rounded">
                    <button
                      onClick={() => decrementHandler(value)}
                      disabled={quantities[value._id] === 1}
                    >
                      -
                    </button>
                    <p>{quantities[value._id]}</p>
                    <button onClick={() => incrementHandler(value)}>+</button>
                  </div>
                  <div
                    onClick={() => removeItemHandler(value)}
                    className=" hover:scale-110 transition-all absolute top-[-5px] right-[5px] text-red-700 cursor-pointer"
                  >
                    <XCircleIcon></XCircleIcon>
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
              <button
                onClick={() => checkoutHandler(totalPrice, "Demo items")}
                className=" w-[95%] mx-auto py-2 hover:bg-green-700 text-white font-semibold bg-green-600 rounded "
              >
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
