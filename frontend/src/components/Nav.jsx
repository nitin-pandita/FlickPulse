import React from "react";
import Logo from "../images/Logo.png";
import { BsFacebook } from "react-icons/bs";
import SocialButton from "./SocialButton";

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
      <div>
        <SocialButton />
      </div>
    </div>
  );
};

export default Nav;
