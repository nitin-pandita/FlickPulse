import React from "react";
import Logo from "../images/Logo.png";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillGoogleCircle,
  AiFillYoutube,
} from "react-icons/ai";
const Nav = () => {
  return (
    <div
      className="
        flex
        break:flex-col
        break:h-[40vh]
        break:w-full
        justify-between
        items-center
        h-[10vh]
      "
    >
      <div className="w-[20%] break:w-[30%] ">
        <img src={Logo} alt="" />
      </div>
      <div>
        <ul
          className="
          flex
          justify-center
          items-center
          text-center
          text-white
          wrapBreak:flex-wrap
        "
        >
          <li className="text-[18px] mx-5 font-Mont">Home</li>
          <li className="text-[18px] mx-5 font-Mont">Work</li>
          <li className="text-[18px] mx-5 font-Mont">Top</li>
          <li className="text-[18px] mx-5 font-Mont">Trending</li>
          <li className="text-[18px] mx-5 font-Mont">Hit</li>
        </ul>
      </div>
      <div
        className="
            flex
            justify-center
            items-center
            text-center


  
        "
      >
        <a
          href=""
          className="
            text-white
            hover:text-primary            
            transition 
            duration-300
            ease-in-out
            transform 
            hover:-translate-y-1
            hover:scale-110 "
        >
          <AiFillTwitterCircle size="33px" />
        </a>

        <a
          href=""
          className="             
            text-white
            mx-4
            hover:text-primary            
            transition 
            duration-300
            ease-in-out
            transform 
            hover:-translate-y-1
            hover:scale-110"
        >
          <AiFillGoogleCircle size="33px" />
        </a>
        <a
          href=""
          className="            
            text-white

            hover:text-primary            
            transition 
            duration-300
            ease-in-out
            transform 
            hover:-translate-y-1
            hover:scale-110"
        >
          <AiFillYoutube size="33px" />
        </a>
      </div>
      ;
    </div>
  );
};

export default Nav;
