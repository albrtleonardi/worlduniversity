import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1637501435770-4fe1ebd226e1?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Russia",
    title: "Russia",
    link: "/country/russia",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1601923146328-310db041a805?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Canada",
    title: "Canada",
    link: "/country/canada",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Brazil",
    title: "Brazil",
    link: "/country/brazil",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Japan",
    title: "Japan",
    link: "/country/japan",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Indonesia",
    title: "Indonesia",
    link: "/country/indonesia",
  },
];

const BannerCarousel = () => {
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

export default BannerCarousel;
