import React, { useState } from "react";
import { Link } from "react-router-dom";

const CountrySearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (!searchQuery) return;

    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${searchQuery}`
      );
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Country Search</h1>

      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Enter country name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded-l-lg p-2 w-full max-w-sm"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchResults.map((country) => (
          <Link
            to={`/country/${country.name.common}`}
            key={country.cca3}
            className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow block"
          >
            <h2 className="text-xl font-semibold mb-2">
              {country.name.common}
            </h2>
            <img
              src={country.flags.svg}
              alt={`${country.name.common} flag`}
              className="w-full h-32 object-cover mb-4 rounded"
            />
            <p className="text-gray-600">Region: {country.region}</p>
            <p className="text-gray-600">
              Population: {country.population.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountrySearch;
