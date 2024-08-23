import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchOverlay = ({ searchActive, toggleSearch, countries }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const navigate = useNavigate();
  const resultsRef = useRef(null);

  useEffect(() => {
    if (searchQuery) {
      const results = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results.slice(0, 250));
    } else {
      setSearchResults([]);
    }
    setHighlightedIndex(0);
  }, [searchQuery, countries]);

  useEffect(() => {
    if (resultsRef.current) {
      const highlightedItem = resultsRef.current.children[highlightedIndex];
      if (highlightedItem) {
        highlightedItem.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [highlightedIndex]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prevIndex) =>
        prevIndex === searchResults.length - 1 ? 0 : prevIndex + 1
      );
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prevIndex) =>
        prevIndex === 0 ? searchResults.length - 1 : prevIndex - 1
      );
    } else if (e.key === "Enter" && searchResults[highlightedIndex]) {
      navigate(
        `/country/${searchResults[highlightedIndex].name.common.toLowerCase()}`
      );
      toggleSearch();
    }
  };

  return (
    searchActive && (
      <div
        className="fixed inset-0 bg-black bg-opacity-75 z-40 flex items-center justify-center p-4"
        onClick={toggleSearch}
      >
        <div
          className="bg-white p-6 rounded-2xl font-poppins w-full max-w-lg mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center space-x-4">
            <input
              type="text"
              className="p-2 border rounded-full bg-gray-200 placeholder-gray-500 w-full pl-6"
              placeholder="Search countries"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={() => setSearchQuery("")} className="p-2">
              ❌
            </button>
          </div>
          <div className="mt-4 max-h-96 overflow-y-auto" ref={resultsRef}>
            {searchResults.length === 0 && searchQuery ? (
              <div className="text-center text-gray-500">No results found</div>
            ) : (
              <ul>
                {searchResults.map((country, index) => (
                  <li
                    key={country.cca3}
                    className={`cursor-pointer text-lg font-poppins font-light mb-2 p-2 rounded ${
                      index === highlightedIndex
                        ? "bg-gray-200"
                        : "hover:bg-gray-200"
                    }`}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    onClick={() => {
                      navigate(`/country/${country.name.common.toLowerCase()}`);
                      toggleSearch();
                    }}
                  >
                    {country.name.common}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default SearchOverlay;
