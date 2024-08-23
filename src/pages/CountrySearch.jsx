import React, { useState, useEffect } from "react";
import BannerCarousel from "../components/BannerCarousel";
import SearchOverlay from "../components/SearchOverlay";
import CountryGrid from "../components/CountryGrid";
import { FiSearch } from "react-icons/fi";

const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchActive, setSearchActive] = useState(false);
  const [showSearchIcon, setShowSearchIcon] = useState(false);
  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    setLoading(true);
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
    setLoading(false);
  };

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  const handleObserver = (entries) => {
    setShowSearchIcon(!entries[0].isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "0px",
      threshold: 0,
    });

    const target = document.querySelector("#carousel-end");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <div>
      <BannerCarousel />
      <div id="carousel-end"></div>

      {showSearchIcon && (
        <div className="fixed bottom-4 right-4 z-30">
          <button
            onClick={toggleSearch}
            className="p-4 bg-white rounded-full shadow-lg flex items-center space-x-2"
          >
            <FiSearch size={24} />
            <span className="text-lg font-medium">Search Country</span>
          </button>
        </div>
      )}

      <SearchOverlay
        searchActive={searchActive}
        toggleSearch={toggleSearch}
        countries={countries}
      />

      <CountryGrid countries={countries} loading={loading} />
    </div>
  );
};

export default CountrySearch;
