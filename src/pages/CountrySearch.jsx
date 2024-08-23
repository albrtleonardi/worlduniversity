import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BannerCarousel from "../components/BannerCarousel";
import SearchOverlay from "../components/SearchOverlay";
import CountryGrid from "../components/CountryGrid";
import { FiSearch } from "react-icons/fi";

const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [visibleCountries, setVisibleCountries] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [visibleSearchResults, setVisibleSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchActive, setSearchActive] = useState(false);
  const [showSearchIcon, setShowSearchIcon] = useState(false);
  const searchOverlayRef = useRef(null);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
      setVisibleCountries(data.slice(0, 27));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching countries:", error);
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query) {
      setSearchResults([]);
      setVisibleSearchResults([]);
      return;
    }
    const results = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
    setVisibleSearchResults(results.slice(0, 9));
  };

  const toggleSearch = () => {
    setSearchActive(!searchActive);
    if (!searchActive) {
      setSearchQuery("");
    }
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
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        searchResults={visibleSearchResults}
        toggleSearch={toggleSearch}
        searchOverlayRef={searchOverlayRef}
      />

      <CountryGrid
        visibleCountries={visibleCountries}
        setVisibleCountries={setVisibleCountries}
        countries={countries}
        loading={loading}
      />
    </div>
  );
};

export default CountrySearch;
