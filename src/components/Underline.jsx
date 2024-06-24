const UnderlineText = ({ text }) => {
  return (
    <span className="relative text-2xl mb-10 font-bold inline-block">
      {text}
      <span className="absolute w-full left-0 bottom-[-10px] rounded-full flex justify-center">
        <svg
          className=" rounded-full"
          width="100%"
          height="20px"
          viewBox="0 0 100 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className=" rounded-full"
            d="M0,5 Q50,10 100,5"
            stroke="green"
            strokeWidth="3"
            fill="transparent"
          />
        </svg>
      </span>
    </span>
  );
};

export default UnderlineText;
