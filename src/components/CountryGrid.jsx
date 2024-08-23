// Skeletal effectnya gak jalan T^T

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const CountryGrid = () => {
  const [countries, setCountries] = useState([]);
  const [visibleCountries, setVisibleCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const observer = useRef();

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
    } catch (error) {
      console.error("Error fetching countries:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreCountries = useCallback(() => {
    if (loadingMore || visibleCountries.length >= countries.length) return;
    setLoadingMore(true);
    const start = visibleCountries.length;
    const end = start + 3;
    setTimeout(() => {
      setVisibleCountries((prev) => [...prev, ...countries.slice(start, end)]);
      setLoadingMore(false);
    }, 1000);
  }, [loadingMore, visibleCountries, countries]);

  const lastCountryElementRef = useCallback(
    (node) => {
      if (loadingMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMoreCountries();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loadingMore, loadMoreCountries]
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mt-10">
      {loading
        ? Array(9)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="p-4">
                <Skeleton height={200} className="rounded-lg" />
                <Skeleton height={24} className="mt-2" />
              </div>
            ))
        : visibleCountries.map((country, index) => (
            <Link
              to={`/country/${country.name.common.toLowerCase()}`}
              key={country.cca3}
              ref={
                index === visibleCountries.length - 1
                  ? lastCountryElementRef
                  : null
              }
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
                <p className="text-sm text-left text-gray-600 font-inter font-light">
                  Region: {country.region}
                </p>
                <p className="text-sm text-left text-gray-600 font-inter font-light">
                  Languages: {Object.values(country.languages || {}).join(", ")}
                </p>
                <p className="text-sm text-left text-gray-600 font-inter font-light">
                  Independent: {country.independent ? "Yes" : "No"}
                </p>
              </div>
            </Link>
          ))}
      {loadingMore && (
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
      )}
    </div>
  );
};

export default CountryGrid;
