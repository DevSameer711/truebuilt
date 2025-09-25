import React from "react";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = ({ onNavClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#f55018] text-white p-3 hidden sm:block">
  <div className="container mx-auto flex justify-between items-center px-10">
    {/* Column 1 — Address */}
    <div className="flex items-center space-x-2 flex-1">
      <FaMapMarkerAlt />
      <span>Charlotte, NC & Surrounding Areas</span>
    </div>

    {/* Column 2 & 3 — Phone & Email grouped */}
    <div className="flex space-x-8">
      {/* Phone */}
      <div className="flex items-center space-x-2">
        <FaPhone />
        <span>(980) 395‑2025</span>
      </div>

      {/* Email */}
      <div className="flex items-center space-x-2">
        <FaEnvelope />
        <span>info@truebuildpropertysolutions.com</span>
      </div>
    </div>
  </div>
</div>

      {/* Main Navigation */}
      <nav className="bg-[#16191c] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 w-full">
            <div className="cursor-pointer" onClick={() => onNavClick("home")}>
              <div className="text-2xl font-bold">
                TrueBuild Property Solutions
              </div>
              <div className="text-sm text-gray-200">
                Charlotte • Residential & Commercial
              </div>
            </div>
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex flex-grow justify-center items-center space-x-6">
              <button
                onClick={() => onNavClick("home")}
                className="p-2 transition-colors duration-300 hover:text-orange-500"
              >
                Home
              </button>
              <button
                onClick={() => onNavClick("services")}
                className="p-2 transition-colors duration-300 hover:text-orange-500"
              >
                Services
              </button>
              {/* <button className="p-2 transition-colors duration-300 hover:text-orange-500">
                Projects
              </button> */}
              <button
                onClick={() => onNavClick("contact")}
                className="p-2 transition-colors duration-300 hover:text-orange-500"
              >
                Contact
              </button>
            </div>
            {/* Get a Quote Button for Desktop */}
            <div className="hidden lg:flex items-center">
  <motion.button
    onClick={() => onNavClick("contact")}
    className="px-6 py-2 bg-white text-[#f55018] font-semibold rounded-full shadow-lg relative overflow-hidden group"
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <span className="block transition-transform duration-300 group-hover:-translate-y-1">
      Get a Quote
    </span>
  </motion.button>
</div>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            {/* Hamburger menu icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-gray-900 text-white transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <button
            onClick={() => {
              onNavClick("home");
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-center py-2 hover:bg-gray-800 transition-colors duration-300"
          >
            Home
          </button>
          <button
            onClick={() => {
              onNavClick("services");
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-center py-2 hover:bg-gray-800 transition-colors duration-300"
          >
            Services
          </button>
          <button className="block w-full text-center py-2 hover:bg-gray-800 transition-colors duration-300">
            Projects
          </button>
          <button className="block w-full text-center py-2 hover:bg-gray-800 transition-colors duration-300">
            About
          </button>
          <button
            onClick={() => {
              onNavClick("contact");
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-center py-2 hover:bg-gray-800 transition-colors duration-300"
          >
            Contact
          </button>
          <button
            onClick={() => {
              onNavClick("contact");
              setIsMobileMenuOpen(false);
            }}
            className="w-4/5 px-6 py-2 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
