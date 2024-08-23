import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

const CountryGrid = ({ searchActive, searchResults }) => {
  const [countries, setCountries] = useState([]);
  const [visibleCountries, setVisibleCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
      setVisibleCountries(data.slice(0, 9));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching countries:", error);
      setLoading(false);
    }
  };

  const loadMoreCountries = () => {
    if (loading || visibleCountries.length >= countries.length) return;
    setLoading(true);
    const start = visibleCountries.length;
    const end = start + 3;

    setTimeout(() => {
      setVisibleCountries((prev) => [...prev, ...countries.slice(start, end)]);
      setLoading(false);
    }, 1000);
  };

  return (
    <InfiniteScroll
      dataLength={visibleCountries.length}
      next={loadMoreCountries}
      hasMore={visibleCountries.length < countries.length}
      loader={
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="p-4">
                <Skeleton height={200} className="rounded-lg" />
                <Skeleton height={24} className="mt-2" />
              </div>
            ))}
        </div>
      }
      endMessage={<p className="text-center">All countries loaded!</p>}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mt-10">
        {(searchActive ? searchResults : visibleCountries).map((country) => (
          <Link
            to={`/country/${country.name.common.toLowerCase()}`}
            key={country.cca3}
          >
            <div className="cursor-pointer">
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <img
                  src={country.flags.svg}
                  alt={`${country.name.common} flag`}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                  style={{
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </div>
              <h3 className="text-lg mt-2 text-left font-poppins font-normal">
                {country.name.common}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default CountryGrid;
