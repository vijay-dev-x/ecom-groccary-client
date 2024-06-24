import axios from "axios";
import { CircleX, Cross, Crosshair } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { categoryList } from "../../lib/data";

export default function UploadProduct() {
  const localEmail = localStorage.getItem("email");
  const [isAdmin, setIsAdmin] = useState(false);
  const [uploadProduct, setUploadProduct] = useState({
    email: localEmail,
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    if (localEmail === import.meta.env.VITE_ADMIN_EMAIL) {
      setIsAdmin(true);
    }
  }, [localEmail]);

  const handleImgUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setUploadProduct((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };

    reader.onerror = (error) => {
      console.error("Error uploading image: ", error);
    };
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUploadProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleImageRemove = () => {
    setUploadProduct((prev) => ({
      ...prev,
      image: "",
    }));
  };
  const handleUpload = async () => {
    const startToast = toast.loading("Uploading product...");
    console.log(uploadProduct);
    try {
      const res = await axios.post("http://localhost:8000/api/product/upload", {
        email: uploadProduct.email,
        name: uploadProduct.name,
        price: uploadProduct.price,
        description: uploadProduct.description,
        image: uploadProduct.image,
        category: uploadProduct.category,
      });
      console.log(res);
      toast.success("Product Uploaded", { id: startToast });
    } catch (error) {
      console.log("product upload", error);
      toast.error("Failed to Uploaded", { id: startToast });
    }
  };

  return !isAdmin ? (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center animate-fadeIn">
        <h1 className="text-3xl font-bold text-red-600 mb-4 animate-pulse">
          Access Denied !!
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Only admins can access this page. Please log in with an admin account.
        </p>
        <Link
          to="/signin"
          className="px-4 py-2 font-semibold bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Go to Login
        </Link>
      </div>
    </div>
  ) : (
    <div className="flex w-full justify-center">
      <div className="w-[600px] bg-slate-100 shadow-md">
        <div className="font-semibold text-xl text-center my-2">
          Upload Product
        </div>
        <div className=" px-5 py-2 flex flex-col gap-5">
          <div className="flex flex-col justify-center text-black">
            <label htmlFor="name">Product Name:</label>
            <input
              className="py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              id="name"
              name="name"
              type="text"
              value={uploadProduct.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex flex-col gap-2 justify-center text-black">
            <label htmlFor="category">Category:</label>
            <select
              className="py-2 cursor-pointer"
              name="category"
              id="category"
              value={uploadProduct.category}
              onChange={handleInputChange}
            >
              <option value="#">Select Category</option>
              {categoryList.map((value, index) => (
                <option
                  className=" cursor-pointer"
                  key={index}
                  value={value.name}
                >
                  {value.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col justify-center text-black">
            <label htmlFor="price">Product Price:</label>
            <input
              className="py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              id="price"
              name="price"
              type="text"
              value={uploadProduct.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="p-2">
            <label className="" htmlFor="image">
              Upload image:
              <div className="my-2 w-[95%] mx-auto relative  h-56 bg-slate-200 flex items-center justify-center">
                {uploadProduct.image ? (
                  <div className=" h-full w-full p-2">
                    <img
                      src={uploadProduct.image}
                      className=" h-[90%] w-[90%] object-scale-down"
                      alt="Product"
                    />

                    <div className=" absolute cursor-pointer  top-[-10px] left-[-10px]">
                      <CircleX
                        onClick={handleImageRemove}
                        size={25}
                        className=" text-gray-600"
                      ></CircleX>
                    </div>
                  </div>
                ) : (
                  <input
                    className="  mix-blend-multiply object-scale-down"
                    type="file"
                    id="image"
                    onChange={handleImgUpload}
                  />
                )}
              </div>
            </label>
          </div>
          <div className="flex flex-col justify-center text-black">
            <label htmlFor="description">Product Descrition:</label>
            <textarea
              className="py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              id="price"
              name="description"
              type="textarea"
              value={uploadProduct.description}
              onChange={handleInputChange}
              rows={3}
            />
          </div>
          <div className=" bg-green-600 w-full text-center font-semibold rounded text-white">
            <button className=" py-2 rounded " onClick={handleUpload}>
              Upload product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
