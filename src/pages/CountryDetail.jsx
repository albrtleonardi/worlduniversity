import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import Footer from "../components/Footer";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const CountryDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}`
        );
        setCountry(response.data[0]);
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };

    fetchCountryDetails();
  }, [name]);

  if (!country) {
    return <div>Loading...</div>;
  }

  const bounds = [
    [country.latlng[0] - 5, country.latlng[1] - 5],
    [country.latlng[0] + 5, country.latlng[1] + 5],
  ];

  return (
    <div>
      <div className="p-6 bg-gray-100 h-screen flex justify-center items-center relative z-10">
        <button
          className="absolute top-4 left-16 lg:left-4 font-light font-inter hover:underline z-20"
          onClick={() => navigate("/searchcountry")}
        >
          &larr; Country Search
        </button>

        <div className="max-w-5xl w-5/6 lg:w-full bg-white rounded-lg shadow-lg flex flex-col gap-8 p-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2 h-40 lg:h-96 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <MapContainer
                bounds={bounds}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[country.latlng[0], country.latlng[1]]}>
                  <Popup>{country.name.common}</Popup>
                </Marker>
              </MapContainer>
            </div>

            <div className="flex flex-col justify-between w-full lg:w-1/2 p-4">
              <div className="flex flex-col items-start">
                <div className="flex items-center justify-between w-full mb-2">
                  <h1 className="text-4xl font-normal font-poppins">
                    {country.name.common}
                  </h1>
                  <img
                    src={country.flags.svg}
                    alt={`${country.name.common} flag`}
                    className="w-16 h-auto rounded-lg shadow-lg"
                  />
                </div>

                <div className="w-full flex">
                  <div className="h-1 w-12 bg-black mt-2 mb-4"></div>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-sm font-poppins">
                <p>
                  <strong>Official Name:</strong> {country.name.official}
                </p>
                <p>
                  <strong>Capital:</strong> {country.capital?.[0]}
                </p>
                <p>
                  <strong>Population:</strong>{" "}
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <strong>Area:</strong> {country.area.toLocaleString()} km²
                </p>
                <p>
                  <strong>Currency:</strong>{" "}
                  {Object.values(country.currencies || {})
                    .map((currency) => `${currency.name} (${currency.symbol})`)
                    .join(", ")}
                </p>
                <p>
                  <strong>Languages:</strong>{" "}
                  {Object.values(country.languages || {}).join(", ")}
                </p>
              </div>

              <div className="lg:mt-4 mt-8">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${country.latlng?.[0]},${country.latlng?.[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 text-black bg-white rounded-full border border-black"
                >
                  <FaMapMarkerAlt className="mr-2" />
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CountryDetail;
