import { useSelector } from "react-redux";
import Carts from "../components/Carts";
import FilterProducts from "../components/FilterProducts";
import RightSidebar from "../components/RightSidebar";

export default function Home() {
  const selectorProducts = useSelector((state) => state.store.products);
  console.log("selector home", selectorProducts);
  return (
    <div>
      <RightSidebar></RightSidebar>
      <div className=" container mx-auto flex md:flex-row flex-col gap-4 justify-between">
        <div className=" flex max-w-xl flex-col gap-5">
          <div className=" flex gap-2 bg-green-200 items-center rounded-full px-4  w-fit py-1">
            <p className=" text-green-800 font-bold">Bike dilivery</p>
            <img src="/delivery-man.png" className=" w-12" alt="" />
          </div>
          <h1 className=" text-4xl md:text-7xl font-bold">
            The Fastest Delivery in{" "}
            <span className=" text-green-600">your Home</span>{" "}
          </h1>
          <p className=" text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum hic
            beatae iusto accusantium ipsa, fugit consequuntur cumque reiciendis
            possimus mollitia dolorem quidem error inventore! Est mollitia
            facilis itaque dicta non.
          </p>
          <button className=" w-fit hover:bg-green-700 px-20 py-2 bg-green-600 text-lg md:mt-8 mt-4 text-white font-semibold rounded-md">
            Order now
          </button>
        </div>
        <div>
          <div className="grid my-10 md:my-0 grid-cols-2 gap-5 ">
            {selectorProducts?.slice(-4).map((value) => (
              <div
                className=" flex flex-col justify-center items-center"
                key={value._id}
              >
                <img className=" max-w-[220px]" src={value.image} alt="" />
                <p className=" text-sm text-gray-600/80 ">{value.category}</p>
                <p className=" text-sm whitespace-nowrap md:text-lg font-semibold ">
                  {value.name}
                </p>
                <p className=" text-green-800 font-semibold">
                  {" "}
                  &#8377; {value.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Carts data={selectorProducts} text={"Our Popular Products"}></Carts>
      <Carts data={selectorProducts} text={"Our Recent Products"}></Carts>
      <Carts data={selectorProducts} text={"Our Most selling Products"}></Carts>
      <FilterProducts></FilterProducts>
    </div>
  );
}
