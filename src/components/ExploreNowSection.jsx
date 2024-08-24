import React from "react";
import Slider from "react-slick";

const ExploreNowSection = ({ images, settings }) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto justify-center items-center pl-4 md:pl-16 pr-4 md:pr-16 space-y-4 md:space-y-0 mt-10 md:mt-16 md:space-x-8">
      <div className="flex flex-col justify-center items-start md:w-1/2">
        <h1 className="font-semibold font-poppins text-4xl mb-4">
          Explore now!
        </h1>
        <div className="w-16 h-1 mb-4 bg-[#1A202C]"></div>
        <p className="font-inter text-sm font-light">
          Step beyond the familiar and dive into the wonders of our incredible
          planet. With over 250 countries to explore, each offering its own
          unique cultures, landscapes, and experiences, the world is waiting for
          you to uncover its secrets. Imagine walking through ancient cities,
          savoring exotic cuisines, or finding serenity in breathtaking natural
          wonders. Every corner of the globe holds a new story, a new adventure,
          and an opportunity to connect with people and places in ways you’ve
          never imagined. <br /> <br />
          Whether you're seeking the thrill of adventure, the warmth of human
          connection, or the spark of inspiration, there’s a destination out
          there that will captivate your heart and expand your mind. Don’t just
          settle for dreaming about the world—immerse yourself in it. Your
          journey of discovery begins now. Unlock the beauty, diversity, and
          countless possibilities that the world has to offer.{" "}
          <span className="font-semibold">Explore Now </span>
          and let the wonders of the world surprise and inspire you at every
          turn.
        </p>
        <button className="md:w-1/2 w-full p-2 border rounded-full border-black mt-4 transition-all duration-300 ease-in-out hover:bg-black hover:text-white relative overflow-hidden md:mb-0 mb-6">
          <span className="block">Go Explore</span>
        </button>
      </div>

      <div className="w-full md:w-1/2">
        <Slider {...settings}>
          {images.map((url, index) => (
            <div key={index} className="h-full">
              <img
                src={url}
                alt={`World view ${index + 1}`}
                className="object-cover w-full h-full rounded-lg"
                style={{ maxHeight: "500px" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ExploreNowSection;
