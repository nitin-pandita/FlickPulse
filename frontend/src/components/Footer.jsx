import React from "react";
import Logo from "../images/Logo.png";
import footerImg from "../images/spider2.jpg";
import SocialButton from "./SocialButton";
import { BsTelephoneFill, BsFillPrinterFill } from "react-icons/bs";
import {
  BiMailSend,
  BiPhone,
  BiPrinter,
  BiLocationPlus,
  BiArrowFromLeft,
} from "react-icons/bi";

const Footer = () => {
  const footerStyle = {
    backgroundImage: `url(${footerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "fit",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // Add this line to prevent the image from scrolling with the content
  };

  return (
    <div className="min-h-[60vh]" style={footerStyle}>
      <div className="flex justify-center items-center text-center">
        <span className="w-[40%] h-0.5 bg-white"></span>
        <img src={Logo} alt="" className="w-[16%]" />
        <span className="w-[40%] h-0.5 bg-white"></span>
      </div>

      <div className="text-white flex justify-evenly items-center semiHalf:flex-col ">
        <div className="flex flex-col justify-center items-center w-[30%] semiHalf:w-[100%] semiHalf:p-3">
          <img src={Logo} alt="" width="20%" />
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            harum quas nihil, adipisci fugiat obcaecati soluta quidem. Cum sint
            sunt eos fugit in.
          </p>
          <div>
            <SocialButton />
            <h6>Copyright @ Nitin Pandita</h6>
          </div>
        </div>
        <div className="secondBlock semiHalf:w-[100%] w-[10%] flex items-center flex-col text-center ">
          <h4 className="font-Poppins font-extrabold text-primary text-2xl">
            Menu
          </h4>
          <ul
            className="
        "
          >
            <li className="text-[18px] mx-5 font-Mont cursor-pointer">Home</li>
            <li className="text-[18px] mx-5 font-Mont cursor-pointer">Work</li>
            <li className="text-[18px] mx-5 font-Mont cursor-pointer">Top</li>
            <li className="text-[18px] mx-5 font-Mont cursor-pointer">
              Trending
            </li>
            <li className="text-[18px] mx-5 font-Mont cursor-pointer">Hit</li>
          </ul>
        </div>
        <div className="thirdBox semiHalf:text-center">
          <h4 className="text-primary font-extrabold text-2xl">Contact Info</h4>
          <div className="icons ">
            <h5>
              <BiPhone className="inline mr-3 text-2xl" />
              +91 342526262
            </h5>
            <h5>
              <BiMailSend className="inline mr-3 text-2xl" />
              demo@gmail.com
            </h5>

            <h5>
              <BiPrinter className="inline mr-3 text-2xl" />
              Yahho@studio.com
            </h5>
            <h5>
              <BiLocationPlus className="inline mr-3 text-2xl" />
              Demo 34 street station
            </h5>
          </div>
        </div>

        <div className="fourthBox semiHalf:w-[100%]  w-[18%] relative text-center">
          <h1 className="text-primary font-extrabold text-xl">
            SIGN UP NEWSLETTER
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            distinctio quaerat officiis?
          </p>
          <div className="mt-3 flex items-center justify-center text-center w-[100%] semiHalf:p-3 ">
            <input
              placeholder="Enter your email"
              type="text"
              className="p-2 w-full text-sm text-black outline-none"
            />
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center object-fill  ">
              <button>
                <BiArrowFromLeft />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
