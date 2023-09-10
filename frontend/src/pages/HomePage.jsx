import React from "react";
import Nav from "../components/Nav";
import background from "../images/stranger.jpg";
import Button from "../components/Button";
const HomePage = () => {
  return (
    <div
      className="landing"
      style={{
        backgroundImage: "linear-gradient(89deg, #260309, #021A4A)",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)", // Add box shadow at the bottom
      }}
    >
      <Nav />
      <div className="w-full h-[94vh] overflow-hidden relative">
        <img
          src={background}
          alt=""
          className="
          w-full
          h-full
          object-cover
          relative
        "
        />
        <div
          className="
          absolute
          top-[20%]
          w-full
          p-5
          bg-transparent
          flex
          flex-col
          text-center
          justify-center
          items-center
          text-white
          "
        >
          <h5 className="relative text-center">
            <span className="">Welcome to FLICK PULSE</span>
          </h5>

          <h1 className="text-4xl">
            PRODUCE <span className="font-extrabold">FILMS</span> FEATURE,{" "}
            <br /> <span className="font-extrabold">TELEVISION</span> &{" "}
            <span>GAMES</span>
          </h1>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
