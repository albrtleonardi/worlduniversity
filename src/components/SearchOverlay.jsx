import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchOverlay = ({
  searchActive,
  searchQuery,
  handleSearch,
  searchResults,
  toggleSearch,
  searchOverlayRef,
}) => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const navigate = useNavigate();
  const [visibleSearchResults, setVisibleSearchResults] = useState([]);

  useEffect(() => {
    setHighlightedIndex(0);
    setVisibleSearchResults(searchResults.slice(0, 50));
  }, [searchResults]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prevIndex) =>
        prevIndex === visibleSearchResults.length - 1 ? 0 : prevIndex + 1
      );
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prevIndex) =>
        prevIndex === 0 ? visibleSearchResults.length - 1 : prevIndex - 1
      );
    } else if (e.key === "Enter" && visibleSearchResults[highlightedIndex]) {
      navigate(
        `/country/${visibleSearchResults[
          highlightedIndex
        ].name.common.toLowerCase()}`
      );
      toggleSearch();
    }
  };

  return (
    searchActive && (
      <div
        className="fixed inset-0 bg-black bg-opacity-75 z-40 flex items-center justify-center"
        ref={searchOverlayRef}
        onClick={toggleSearch}
      >
        <div
          className="bg-white p-6 rounded-lg max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center space-x-4">
            <input
              type="text"
              className="p-2 border rounded-full bg-gray-200 placeholder-gray-500 w-full"
              placeholder="Search countries"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={() => handleSearch("")} className="p-2">
              ❌
            </button>
          </div>
          <div className="mt-4 max-h-96 overflow-y-auto">
            {searchResults.length === 0 && searchQuery ? (
              <div className="text-center text-gray-500">No results found</div>
            ) : (
              <ul>
                {visibleSearchResults.map((country, index) => (
                  <li
                    key={country.cca3}
                    id={`result-${index}`}
                    className={`cursor-pointer text-lg font-semibold mb-2 p-2 rounded ${
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
