import { useSelector } from "react-redux";
import UnderlineText from "./Underline";
import SingleCart from "./SingleCart";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Fisher-Yates Shuffle function
const shuffleArray = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export default function Carts({ text, data }) {
  const containerRef = useRef();
  const [shuffledData, setShuffledData] = useState([]);

  const priviousScroll = () => {
    containerRef.current.scrollLeft -= 300;
  };
  const nextScroll = () => {
    containerRef.current.scrollLeft += 300;
  };
  //   suffle array--
  useEffect(() => {
    if (data && data.length > 0) {
      setShuffledData(shuffleArray([...data]));
    }
  }, [data]);

  return (
    <div className=" my-5 mt-20">
      <UnderlineText className=" " text={text}></UnderlineText>
      <div className=" relative">
        <div
          ref={containerRef}
          className="  flex gap-5 overflow-x-scroll w-[100%] scroll-smooth no-scrollbar"
        >
          {shuffledData?.map((value) => (
            <div key={value._id}>
              <SingleCart value={value}></SingleCart>
            </div>
          ))}
        </div>

        <div className=" hidden absolute w-full top-[40%] md:flex justify-between items-center">
          <button
            onClick={priviousScroll}
            className=" bg-white shadow-lg p-2 ml-[-12px] rounded-full "
          >
            <ArrowLeft></ArrowLeft>
          </button>
          <button
            onClick={nextScroll}
            className=" bg-white shadow-lg p-2 rounded-full "
          >
            <ArrowRight></ArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
}
