import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [totalOfTheCountries, setTotalOfTheCountries] = useState(0);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setTotalOfTheCountries(data.length);
    };
    fetchCountries();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const images = [
    "https://images.unsplash.com/photo-1490761668535-35497054764d?q=80&w=2505&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1531975474574-e9d2732e8386?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1676657955507-b1f993556e80?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1531737212413-667205e1cda7?q=80&w=3016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

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

      <div className="flex flex-col md:flex-row w-full h-auto md:h-[70%] justify-center items-center pl-4 md:pl-16 pr-4 md:pr-16 space-y-4 md:space-y-0 mt-10 md:mt-0 md:space-x-8">
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
          className="w-full h-auto md:w-[36rem]"
        />
      </div>

      <div className="flex flex-col md:space-y-4 space-y-2 justify-center items-center w-full h-20 bg-white mt-10">
        <h2 className="text-base md:text-xl font-poppins font-normal">
          Do you know? There are{" "}
          <span className="font-bold">{totalOfTheCountries}+</span> countries in
          this big world
        </h2>
        <div className="w-full flex justify-center">
          <div className="w-20 h-1 bg-black"></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full h-auto justify-center items-center pl-4 md:pl-16 pr-4 md:pr-16 space-y-4 md:space-y-0 mt-10 md:mt-16 md:space-x-8">
        <div className="flex flex-col justify-center items-start md:w-1/2">
          <h1 className="font-semibold font-poppins text-4xl mb-4">
            Explore now!
          </h1>
          <div className="w-16 h-1 mb-4 bg-[#1A202C]"></div>
          <p className="font-inter text-sm font-light">
            Step beyond the familiar and dive into the wonders of our incredible
            planet. With over 250 countries to explore, each offering its own
            unique cultures, landscapes, and experiences, the world is waiting
            for you to uncover its secrets. Imagine walking through ancient
            cities, savoring exotic cuisines, or finding serenity in
            breathtaking natural wonders. Every corner of the globe holds a new
            story, a new adventure, and an opportunity to connect with people
            and places in ways you’ve never imagined. <br /> <br />
            Whether you're seeking the thrill of adventure, the warmth of human
            connection, or the spark of inspiration, there’s a destination out
            there that will captivate your heart and expand your mind. Don’t
            just settle for dreaming about the world—immerse yourself in it.
            Your journey of discovery begins now. Unlock the beauty, diversity,
            and countless possibilities that the world has to offer.{" "}
            <span className="font-semibold">Explore Now </span>
            and let the wonders of the world surprise and inspire you at every
            turn
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

      <div className="flex flex-col md:flex-row w-full h-auto md:h-[70%] justify-center items-center pl-4 md:pl-16 pr-4 md:pr-16 space-y-4 md:space-y-0 mt-16 md:mt-0 md:space-x-8">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-semibold font-poppins text-4xl mb-4">
            Who We Are
          </h1>
          <div className="w-16 h-1 mb-4 bg-[#1A202C]"></div>
          <p className="font-inter text-sm font-light text-center md:w-[36rem] w-full">
            WorldUniversity is a global education platform dedicated to
            exploring and understanding the world's diverse cultures, economies,
            and histories. Founded to make learning accessible, we offer
            detailed country profiles, interactive tools, and multimedia content
            that go beyond basic facts. Whether you're a student, educator, or
            traveler, our platform provides up-to-date resources that foster
            global awareness and connection. Through knowledge, we aim to build
            a more informed and interconnected world.
          </p>
          <button className="md:w-60 w-full p-2 border rounded-full border-black mt-4 transition-all duration-300 ease-in-out hover:bg-black hover:text-white relative overflow-hidden md:mb-0 mb-6">
            <span className="block">About us</span>
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center w-full h-auto text-white bg-[#1A202C] font-poppins font-light pt-4 pb-4 text-sm">
        <h2>Copyright © 2024 WorldUniversity</h2>
      </div>
    </>
  );
};

export default Home;
