import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PopularCountriesSection = () => {
  const [popularCountries, setPopularCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPopularCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      const sortedCountries = data
        .filter((country) => country.population)
        .sort((a, b) => b.population - a.population);
      setPopularCountries(sortedCountries.slice(0, 5));
    };
    fetchPopularCountries();
  }, []);

  const handleCountryClick = (countryName) => {
    navigate(`/country/${countryName.toLowerCase()}`);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-auto bg-white p-8 mt-12 font-poppins">
      <h2 className="text-4xl font-semibold mb-6 font-poppins">
        Popular Countries
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 w-full px-4">
        {popularCountries.map((country, index) => (
          <div
            key={country.cca3}
            onClick={() => handleCountryClick(country.name.common)}
            className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition duration-200"
          >
            <div className="flex items-center">
              <span className="text-3xl font-bold mr-4">#{index + 1}</span>
              <img
                src={country.flags.svg}
                alt={`${country.name.common} flag`}
                className="w-20 h-12 object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="text-lg font-medium">{country.name.common}</h3>
                <p className="text-sm text-gray-600">
                  Region: {country.region}
                </p>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-lg text-gray-800">
                Population: {country.population.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCountriesSection;
