import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const CountryDetail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const data = await response.json();
        setCountry(data[0]);
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
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        {country.name.common}
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        <img
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          className="w-64 h-auto rounded-lg shadow-lg"
        />
        <div>
          <p className="text-xl">
            <strong>Official Name:</strong> {country.name.official}
          </p>
          <p className="text-xl">
            <strong>Capital:</strong> {country.capital?.[0]}
          </p>
          <p className="text-xl">
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p className="text-xl">
            <strong>Area:</strong> {country.area.toLocaleString()} km²
          </p>
          <p className="text-xl">
            <strong>Currency:</strong>{" "}
            {Object.values(country.currencies || {})
              .map((currency) => `${currency.name} (${currency.symbol})`)
              .join(", ")}
          </p>
          <p className="text-xl">
            <strong>Languages:</strong>{" "}
            {Object.values(country.languages || {}).join(", ")}
          </p>
          <p className="text-xl">
            <strong>Location:</strong> Lat: {country.latlng?.[0]}, Lng:{" "}
            {country.latlng?.[1]}
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Location Map</h2>
        <MapContainer
          bounds={bounds}
          style={{ height: "450px", width: "100%" }}
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
    </div>
  );
};

export default CountryDetail;
