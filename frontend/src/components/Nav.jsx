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
    <div className="w-[80%] m-auto  h-30 smh-10 ">
      <div className="flex flex-col sm:flex-row justify-between  items-center w-full m-auto  sm:h-10  ">
        <img
          src={Logo}
          alt="Logo"
          className="ex:w-[60%] w-[20%] sm:w-[10%]  lg:w-[14%] sm:h-20 object-contain"
        />
        <ul className="text-white  w-[80%]  flex ex:flex-wrap  justify-center items-center p-4 ex:w-full">
          <li className="text-[10px] ex:p-2 mx-3">HOME</li>
          <li className="text-[10px] ex:p-2  mx-3">ABOUT</li>
          <li className="text-[10px] ex:p-2  mx-3">PROJECTS</li>
          <li className="text-[10px] ex:p-2  mx-3">NEWS</li>
          <li className="text-[10px] mx-3">MERCHANDISE</li>
          <li className="text-[10px] ex:p-2  mx-3">CONTACT</li>
        </ul>
        <div
          className="
            flex
            justify-center
            items-center
            sm:pr-5
            text-center
  
        "
        >
          <a href="" className="text-white hover:text-primary ">
            <AiFillTwitterCircle size="23px" />
          </a>

          <a href="" className=" text-white hover:text-primary mx-3">
            <AiFillGoogleCircle size="23px" />
          </a>
          <a href="" className=" text-white hover:text-primary">
            <AiFillYoutube size="23px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
