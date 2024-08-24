import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faChartLine,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";

const FeaturesSection = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto bg-gray-100 p-8 mt-12 mb-12 font-poppins">
      <h2 className="text-4xl font-semibold mb-6 font-poppins">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
          <FontAwesomeIcon
            icon={faGlobe}
            size="3x"
            className="text-blue-500 mb-4"
          />
          <h3 className="text-2xl font-semibold mb-4">Country Profiles</h3>
          <p className="text-sm font-light">
            Detailed profiles of every country with information on geography,
            culture, economy, and history.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
          <FontAwesomeIcon
            icon={faChartLine}
            size="3x"
            className="text-green-500 mb-4"
          />
          <h3 className="text-2xl font-semibold mb-4">Interactive Tools</h3>
          <p className="text-sm font-light">
            Compare nations and explore data with our powerful interactive
            tools.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
          <FontAwesomeIcon
            icon={faFilm}
            size="3x"
            className="text-red-500 mb-4"
          />
          <h3 className="text-2xl font-semibold mb-4">Multimedia Content</h3>
          <p className="text-sm font-light">
            Explore countries through videos, images, and other multimedia
            resources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
