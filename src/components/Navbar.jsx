import {
  CirclePlus,
  CircleUser,
  Headset,
  LogIn,
  LogOut,
  ShoppingCart,
  Store,
  Verified,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartSidebar from "../components/RightSidebar.jsx"; // Import the new sidebar component

const logo = "/logo.png";

export default function Navbar() {
  const localEmail = localStorage.getItem("email");
  const navigate = useNavigate();
  const [openUser, setOpenUser] = useState(false);
  const [openCart, setOpenCart] = useState(false); // Add state to manage cart sidebar
  const selectorCart = useSelector((state) => state.store.cartProduct);

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/signin");
  };

  const toggleCartSidebar = () => {
    setOpenCart(!openCart);
  };

  // Ref for the user menu
  const userMenuRef = useRef();

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setOpenUser(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userMenuRef]);

  return (
    <div className="flex z-10 bg-white justify-between items-center fixed top-0 py-4 shadow-md px-4 w-full">
      <Link to={"/"}>
        <img src={logo} height={20} width={20} className="w-28" alt="logo" />
      </Link>
      {import.meta.env.VITE_ADMIN_EMAIL === localEmail && (
        <div className="text-green-700 text-sm items-center mt-1 flex gap-1">
          <p className="font-bold">Admin</p>
          <Verified size={20}></Verified>
        </div>
      )}
      <div className="flex gap-5 items-center">
        <div className="hidden md:flex gap-4 font-semibold">
          <NavLink
            to={"/"}
            className={({ isActive }) => `${isActive && "text-green-600"}`}
          >
            Home
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => `${isActive && "text-green-600"}`}
          >
            Contact
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) => `${isActive && "text-green-600"}`}
          >
            About
          </NavLink>
        </div>

        <div className="relative">
          <ShoppingCart
            onClick={toggleCartSidebar}
            className="cursor-pointer"
          />{" "}
          {/* Add onClick to toggle sidebar */}
          <div className="bg-green-600 -right-4 flex justify-center items-center w-[25px] h-[25px] rounded-full absolute -top-3 p-1 text-white">
            {selectorCart.length}
          </div>
        </div>
        <div
          onClick={() => setOpenUser(!openUser)}
          className="cursor-pointer relative"
        >
          <CircleUser></CircleUser>
          {openUser && (
            <div
              ref={userMenuRef}
              className="absolute border rounded top-10 bg-white py-3 px-2 min-w-[150px] max-w-[200px] flex flex-col gap-3 right-5"
            >
              {import.meta.env.VITE_ADMIN_EMAIL === localEmail && (
                <NavLink
                  to={"/upload-product"}
                  className={({ isActive }) =>
                    `${isActive && "text-green-600"}`
                  }
                >
                  <p className="flex gap-2 whitespace-nowrap text-green-600">
                    <CirclePlus></CirclePlus>Upload product
                  </p>
                </NavLink>
              )}

              <div>
                {localEmail ? (
                  <button
                    onClick={logoutHandler}
                    className="text-red-600 font-semibold flex gap-2"
                  >
                    <LogOut></LogOut> logout
                  </button>
                ) : (
                  <Link to={"/signin"}>
                    <div className=" flex gap-2 hover:scale-105 transition-all text-green-700 rounded-md px-4 font-semibold">
                      <LogIn></LogIn> Login
                    </div>
                  </Link>
                )}
              </div>
              <Link to={"/contact"} className=" flex gap-2">
                <Headset></Headset> Contact
              </Link>
              <Link to={"/about"} className=" flex gap-2">
                <Store></Store> About
              </Link>
            </div>
          )}
        </div>
      </div>
      <CartSidebar isOpen={openCart} toggleSidebar={toggleCartSidebar} />{" "}
      {/* Include the CartSidebar */}
    </div>
  );
}
