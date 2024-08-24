import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute w-[16rem] md:w-96 left-auto right-0 md:right-16 bg-white p-6">
        <h1 className="md:text-3xl text-2xl font-semibold mb-2 font-poppins">
          Explore the World’s Countries with WorldUniversity
        </h1>
        <div className="w-16 h-1 mb-2 bg-[#1A202C]"></div>
        <p className="text-sm font-inter">
          Welcome to WorldUniversity, your go-to resource for discovering
          detailed information about every country in the world. Whether you're
          a student, traveler, or simply curious, our platform lets you
          <span className="font-bold"> explore the geography</span>,
          <span className="font-bold"> culture</span>,{" "}
          <span className="font-bold"> economy</span>, and{" "}
          <span className="font-bold">
            {" "}
            history of nations across the globe
          </span>
          . Dive into country profiles, compare nations, and expand your global
          knowledge with just a click. Start exploring today with
          WorldUniversity!
        </p>
      </div>

      <img
        src="https://images.unsplash.com/photo-1460722665083-c2599113f7e0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Scenic Mountain"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default HeroSection;
