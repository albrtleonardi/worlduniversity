import React, { useState, useRef, useEffect } from "react";
import BannerCarouselFilter from "../components/BannerCarouselFilter";
import CountryGridFilter from "../components/CountryGridFilter";

const FilterCountry = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const bannerRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsFilterVisible(true);
        } else {
          setIsFilterVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (bannerRef.current) {
      observerRef.current.observe(bannerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <div ref={bannerRef}>
        <BannerCarouselFilter />
      </div>
      <CountryGridFilter isFilterVisible={isFilterVisible} />
    </div>
  );
};

export default FilterCountry;
