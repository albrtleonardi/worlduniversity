import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50">
      {/* Burger Button */}
      <button
        onClick={toggleSidebar}
        className={`p-4 fixed top-0 left-0 z-50 lg:hidden transform ${
          isOpen ? "text-white" : "text-[#1A202C]"
        }`}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`h-screen w-64 bg-[#1A202C] text-white flex flex-col justify-between p-4 fixed top-0 left-0 z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 lg:static`}
      >
        <div className="mb-8 mt-16">
          <h1 className="text-4xl font-light font-inter">
            World<br></br>University
          </h1>
        </div>

        <div className="flex flex-col font-normal font-poppins">
          <Link to="/" className="hover:bg-gray-700 p-2 rounded">
            Home
          </Link>
          <Link to="/search" className="hover:bg-gray-700 p-2 rounded">
            Country
          </Link>
          <Link to="/about" className="hover:bg-gray-700 p-2 rounded">
            About
          </Link>
        </div>

        <div className="mt-8 mb-8">
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
