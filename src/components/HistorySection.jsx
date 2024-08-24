import React from "react";

const HistorySection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-[70%] justify-center items-center pl-4 md:pl-16 pr-4 md:pr-16 space-y-4 md:space-y-0 mt-10 md:mt-8 md:space-x-8">
      <div className="flex flex-col justify-center items-start">
        <h1 className="font-semibold font-poppins text-4xl mb-4">
          Our History
        </h1>
        <div className="w-16 h-1 mb-4 bg-[#1A202C]"></div>
        <p className="font-inter text-sm font-light">
          WorldUniversity was founded with the mission to create a comprehensive
          platform for learning about the countries of the world. Our goal is to
          provide accessible resources that help users explore and understand
          the diverse cultures, economies, and histories that shape each nation.
          <br /> <br />
          Over the years, WorldUniversity has grown into a dynamic educational
          hub. We offer detailed country profiles, interactive tools, and
          multimedia content that go beyond basic facts to delve into the
          cultural and economic complexities of each region. Our platform is
          designed for students, educators, travelers, and anyone with a
          curiosity about the world. <br /> <br />
          Committed to lifelong learning, we regularly update our content to
          reflect the latest global developments, ensuring users have access to
          current and accurate information. By fostering global awareness and
          understanding, WorldUniversity aims to connect people across cultures
          and promote a more informed and interconnected world.
        </p>
      </div>
      <img
        src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?cs=srgb&dl=pexels-nurseryart-346885.jpg&fm=jpg"
        alt="History"
        className="w-full h-auto md:w-[36rem]"
      />
    </div>
  );
};

export default HistorySection;
