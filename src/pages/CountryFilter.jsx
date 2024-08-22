import React, { useState } from "react";
import { Link } from "react-router-dom";

const FilterCountry = () => {
  const [region, setRegion] = useState("");
  const [language, setLanguage] = useState("");
  const [independent, setIndependent] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleFilter = async () => {
    try {
      let url = "https://restcountries.com/v3.1/all";
      const queryParams = [];

      if (region) {
        queryParams.push(`region=${region}`);
      }
      if (language) {
        queryParams.push(`languages=${language}`);
      }
      if (independent !== "") {
        queryParams.push(`independent=${independent}`);
      }

      if (queryParams.length > 0) {
        url = `https://restcountries.com/v3.1/all?${queryParams.join("&")}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      let filteredData = data;

      if (region) {
        filteredData = filteredData.filter((country) =>
          country.region.toLowerCase().includes(region.toLowerCase())
        );
      }

      if (language) {
        filteredData = filteredData.filter((country) =>
          Object.values(country.languages || {}).some((lang) =>
            lang.toLowerCase().includes(language.toLowerCase())
          )
        );
      }

      if (independent !== "") {
        filteredData = filteredData.filter(
          (country) => country.independent === (independent === "true")
        );
      }

      setFilteredCountries(filteredData);
    } catch (error) {
      console.error("Error fetching filtered countries:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Filter Countries</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <div>
          <label className="block mb-1">Region:</label>
          <input
            type="text"
            placeholder="e.g., Asia"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="border rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Language:</label>
          <input
            type="text"
            placeholder="e.g., Indonesian"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Independent:</label>
          <select
            value={independent}
            onChange={(e) => setIndependent(e.target.value)}
            className="border rounded-lg p-2"
          >
            <option value="">Select</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            onClick={handleFilter}
            className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition"
          >
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCountries.map((country) => (
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
            <p className="text-gray-600">
              Languages: {Object.values(country.languages || {}).join(", ")}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FilterCountry;
