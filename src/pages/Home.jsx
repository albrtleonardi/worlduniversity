import React from "react";

const Home = () => {
  return (
    <>
      <div className="relative h-screen w-full">
        <div
          className="absolute w-[24rem] md:w-96 left-auto right-0 md:right-16
         bg-white p-6"
        >
          <h1 className="text-3xl font-semibold mb-2 font-poppins">
            Explore the World’s Countries with WorldUniversity
          </h1>
          <div className="w-16 h-1 mb-2 bg-[#1A202C]"></div>
          <p className="text-sm font-inter">
            Welcome to WorldUniversity, your go-to resource for discovering
            detailed information about every country in the world. Whether
            you're a student, traveler, or simply curious, our platform lets you
            <span className="font-bold"> explore the geography</span>,
            <span className="font-bold"> culture</span>,{" "}
            <span className="font-bold"> economy</span>, and{" "}
            <span className="font-bold">
              {" "}
              history of nations across the globe
            </span>
            . Dive into country profiles, compare nations, and expand your
            global knowledge with just a click. Start exploring today with
            WorldUniversity!
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1509299349698-dd22323b5963?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Scenic Mountain"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[70%] justify-center items-center pl-4 md:pl-16 pr-4 md:pr-16 space-y-4 md:space-y-0 mt-10 md:mt-0 md:space-x-4">
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-semibold font-poppins text-4xl mb-4">
            Our History
          </h1>
          <div className="w-16 h-1 mb-4 bg-[#1A202C]"></div>
          <p className="font-inter text-sm font-light">
            {" "}
            WorldUniversity was founded with the mission to create a
            comprehensive platform for learning about the countries of the
            world. Our goal is to provide accessible resources that help users
            explore and understand the diverse cultures, economies, and
            histories that shape each nation. <br /> <br />
            Over the years, WorldUniversity has grown into a dynamic educational
            hub. We offer detailed country profiles, interactive tools, and
            multimedia content that go beyond basic facts to delve into the
            cultural and economic complexities of each region. Our platform is
            designed for students, educators, travelers, and anyone with a
            curiosity about the world. <br /> <br />
            Committed to lifelong learning, we regularly update our content to
            reflect the latest global developments, ensuring users have access
            to current and accurate information. By fostering global awareness
            and understanding, WorldUniversity aims to connect people across
            cultures and promote a more informed and interconnected world.
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?cs=srgb&dl=pexels-nurseryart-346885.jpg&fm=jpg"
          alt=""
          className="w-full h-auto md:w-[40rem]"
        />
      </div>
    </>
  );
};

export default Home;
