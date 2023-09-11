import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
const Button = () => {
  return (
    <div>
      <button
        className="
        bg-transparent
        border-2
        border-white
        text-white
        font-bold
        py-4
        px-6
        rounded-full
        hover:bg-white
        hover:text-black
        transition
        duration-300
        ease-in-out
        transform
        hover:-translate-y-1
        hover:scale-110
        mt-5
        
        "
      >
        <AiOutlineArrowDown />
      </button>
    </div>
  );
};

export default Button;
