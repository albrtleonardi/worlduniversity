import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1472017053394-b29fded587cd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Malaysia",
    title: "Malaysia",
    link: "/country/malaysia",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1694160804354-79f76ae59951?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Italy",
    title: "Italy",
    link: "/country/italy",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1462651567147-aa679fd1cfaf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Switzerland",
    title: "Switzerland",
    link: "/country/switzerland",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?q=80&w=3114&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "India",
    title: "India",
    link: "/country/india",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1508500709478-37a0e8d6603c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sweden",
    title: "Sweden",
    link: "/country/sweden",
  },
];

const BannerCarouselFilter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let timeout;
    if (hovering) {
      timeout = setTimeout(() => {
        setHovering(false);
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [hovering]);

  const handleHover = (index) => {
    setCurrentSlide(index);
    setHovering(true);
  };

  const handleSlideChange = (index) => {
    if (!hovering) {
      setCurrentSlide(index);
    }
  };

  return (
    <div className="w-full h-screen relative">
      <Carousel
        selectedItem={currentSlide}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showArrows={false}
        interval={5000}
        transitionTime={0}
        onChange={handleSlideChange}
        renderIndicator={() => null}
        className="h-full"
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-screen">
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full md:h-full h-screen object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white"></div>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="absolute bottom-10 md:mb-20 md:ml-2 left-10 flex flex-col space-y-2">
        {slides.map((slide, index) => (
          <a
            key={slide.id}
            href={slide.link}
            onMouseEnter={() => handleHover(index)}
            className={`text-white text-4xl md:text-6xl cursor-pointer font-archivo font-light transition-opacity duration-300 ${
              currentSlide === index
                ? "text-white opacity-100"
                : "text-gray-400 opacity-50"
            }`}
          >
            {slide.title}
            <span className="font-poppins text-2xl"> [{slide.id}]</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BannerCarouselFilter;
