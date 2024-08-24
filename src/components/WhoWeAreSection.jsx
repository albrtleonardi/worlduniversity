import React from "react";
import { useNavigate } from "react-router-dom";

const WhoWeAreSection = () => {
  const navigate = useNavigate();

  const handleAbout = () => {
    navigate("/about");
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-[70%] justify-center items-center pl-4 md:pl-16 pr-4 md:pr-16 space-y-4 md:space-y-0 mt-16 md:mt-12 mb-12 md:space-x-8">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold font-poppins text-4xl mb-4">Who We Are</h1>
        <div className="w-16 h-1 mb-4 bg-[#1A202C]"></div>
        <p className="font-inter text-sm font-light text-center md:w-[36rem] w-full">
          WorldUniversity is a global education platform dedicated to exploring
          and understanding the world's diverse cultures, economies, and
          histories. Founded to make learning accessible, we offer detailed
          country profiles, interactive tools, and multimedia content that go
          beyond basic facts. Whether you're a student, educator, or traveler,
          our platform provides up-to-date resources that foster global
          awareness and connection. Through knowledge, we aim to build a more
          informed and interconnected world.
        </p>
        <button
          onClick={handleAbout}
          className="md:w-60 w-full p-2 border rounded-full border-black mt-4 transition-all duration-300 ease-in-out hover:bg-black hover:text-white relative overflow-hidden md:mb-0 mb-6"
        >
          <span className="block">About us</span>
        </button>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
