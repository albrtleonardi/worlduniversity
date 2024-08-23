import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  forwardRef,
} from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import _ from "lodash";

const CountryGridFilter = forwardRef(({ isFilterVisible }, ref) => {
  const [countries, setCountries] = useState([]);
  const [visibleCountries, setVisibleCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [region, setRegion] = useState("");
  const [language, setLanguage] = useState("");
  const [independent, setIndependent] = useState("");
  const observer = useRef(null);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
      setRegions(getUniqueRegions(data));
      setVisibleCountries(data.slice(0, 27));
    } catch (error) {
      console.error("Error fetching countries:", error);
    } finally {
      setLoading(false);
    }
  };

  const getUniqueRegions = (countriesData) => {
    const allRegions = countriesData.map((country) => country.region);
    return Array.from(new Set(allRegions)).filter(Boolean);
  };

  const filterCountries = useCallback(
    (countriesData, region, language, independent) => {
      let filteredData = countriesData;

      if (region) {
        filteredData = filteredData.filter(
          (country) => country.region.toLowerCase() === region.toLowerCase()
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
        const isIndependent = independent === "true";
        filteredData = filteredData.filter(
          (country) => country.independent === isIndependent
        );
      }

      setVisibleCountries(filteredData);
      if (observer.current) observer.current.disconnect();
    },
    []
  );

  const debouncedFilterCountries = useCallback(
    _.debounce(filterCountries, 300),
    []
  );

  const handleFilterChange = useCallback(
    (updatedRegion, updatedLanguage, updatedIndependent) => {
      if (!updatedRegion && !updatedLanguage && updatedIndependent === "") {
        fetchCountries();
      } else {
        setLoading(true);
        debouncedFilterCountries(
          countries,
          updatedRegion,
          updatedLanguage,
          updatedIndependent
        );
        setLoading(false);
      }
    },
    [countries, debouncedFilterCountries]
  );

  const handleRegionChange = (e) => {
    const updatedRegion = e.target.value;
    setRegion(updatedRegion);
    handleFilterChange(updatedRegion, language, independent);
  };

  const handleLanguageChange = (e) => {
    const updatedLanguage = e.target.value;
    setLanguage(updatedLanguage);
    handleFilterChange(region, updatedLanguage, independent);
  };

  const handleIndependentChange = (e) => {
    const updatedIndependent = e.target.value;
    setIndependent(updatedIndependent);
    handleFilterChange(region, language, updatedIndependent);
  };

  const resetAllFilters = () => {
    setRegion("");
    setLanguage("");
    setIndependent("");
    fetchCountries();
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

  const observeLastElement = useCallback(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreCountries();
      }
    });

    if (document.querySelector(".last-country")) {
      observer.current.observe(document.querySelector(".last-country"));
    }
  }, [loadMoreCountries]);

  useEffect(() => {
    if (!region && !language && independent === "") {
      observeLastElement();
    } else {
      if (observer.current) observer.current.disconnect();
    }
  }, [region, language, independent, observeLastElement]);

  return (
    <div ref={ref}>
      <div
        className={`${
          isFilterVisible ? "sticky top-0 bg-white shadow-lg" : ""
        } p-4 z-50`}
      >
        <div className="flex justify-between gap-4 font-poppins">
          <select
            value={region}
            onChange={handleRegionChange}
            className="pl-2 w-1/4 border border-gray-300 rounded"
          >
            <option value="">Select Region</option>
            {regions.map((regionOption) => (
              <option key={regionOption} value={regionOption}>
                {regionOption}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Language"
            value={language}
            onChange={handleLanguageChange}
            className="p-2 w-1/4 border border-gray-300 rounded"
          />
          <select
            value={independent}
            onChange={handleIndependentChange}
            className="p-2 w-1/4 border border-gray-300 rounded"
          >
            <option value="">Select Independence</option>
            <option value="true">Independent</option>
            <option value="false">Not Independent</option>
          </select>
          <button
            onClick={resetAllFilters}
            className="p-2 w-1/4 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mt-10">
        {loading ? (
          Array(9)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="p-4">
                <Skeleton height={200} className="rounded-lg" />
                <Skeleton height={24} className="mt-2" />
              </div>
            ))
        ) : visibleCountries.length === 0 ? (
          <div className="col-span-full text-center text-xl font-semibold text-gray-600">
            Not Found
          </div>
        ) : (
          visibleCountries.map((country, index) => (
            <Link
              to={`/country/${country.name.common.toLowerCase()}`}
              key={country.cca3}
            >
              <div
                className={`cursor-pointer ${
                  index === visibleCountries.length - 1 ? "last-country" : ""
                }`}
              >
                <div className="relative w-full pb-[56.25%]">
                  <img
                    src={country.flags.svg}
                    alt={`${country.name.common} flag`}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg"
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
          ))
        )}
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
    </div>
  );
});

export default CountryGridFilter;
