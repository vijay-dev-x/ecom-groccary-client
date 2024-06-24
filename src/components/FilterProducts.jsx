import { LayoutList } from "lucide-react";
import { categoryList } from "../../lib/data";
import { useSelector } from "react-redux";
import { useState } from "react";
import SingleCart from "./SingleCart";

export default function FilterProducts() {
  const selectorProducts = useSelector((state) => state.store.products);
  const [filterCategory, setFilterCategory] = useState("Biskuts & Cookies");

  return (
    <div className=" my-20 max-w-4xl mx-auto">
      <div className=" flex gap-5  max-w-2xl mx-auto justify-between items-center  ">
        {categoryList.map((value, index) => (
          <div
            onClick={() => setFilterCategory(value.name)}
            key={index}
            className=" flex cursor-pointer items-center gap-1  group flex-col"
          >
            <div
              className={`p-3 ${
                value.name === filterCategory &&
                "bg-green-400 text-black scale-110 transition-all"
              } group-hover:bg-green-300  bg-green-200 text-green-700 rounded-full w-fit`}
            >
              <LayoutList></LayoutList>
            </div>
            <p className=" group-hover:font-semibold text-sm font-semibold  text-neutral-700">
              {value.name}
            </p>
          </div>
        ))}
      </div>
      <div className=" my-10 flex flex-wrap mx-auto justify-center w-full grid-cols-4 gap-7 ">
        {selectorProducts
          ?.filter((value) => value.category === filterCategory)
          .map((value, index) => (
            <div key={value._id}>
              <SingleCart className="" value={value}></SingleCart>
            </div>
          ))}
      </div>
    </div>
  );
}
