import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#f55018] text-white p-3 hidden sm:block">
        <div className="container mx-auto flex justify-between items-center px-10">
          <div className="flex items-center space-x-2 flex-1">
            <FaMapMarkerAlt />
            <span>Charlotte, NC & Surrounding Areas</span>
          </div>

          <div className="flex space-x-8">
            <div className="flex items-center space-x-2">
              <FaPhone />
              <span>(980) 395-2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span>info@truebuildpropertysolutions.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation (Sticky Only) */}
      <nav className="bg-[#16191c] text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 w-full">
            {/* Logo */}
            <button
              onClick={() => handleNav("/")}
              className="cursor-pointer text-left"
            >
              <div className="text-2xl font-bold">
                TrueBuild Property Solutions
              </div>
              <div className="text-sm text-gray-200">
                Charlotte • Residential & Commercial
              </div>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex flex-grow justify-center items-center space-x-6">
              <button
                onClick={() => handleNav("/")}
                className="p-2 transition-colors duration-300 hover:text-orange-500"
              >
                Home
              </button>
              <button
                onClick={() => handleNav("/services")}
                className="p-2 transition-colors duration-300 hover:text-orange-500"
              >
                Services
              </button>
              <button
                onClick={() => handleNav("/contact")}
                className="p-2 transition-colors duration-300 hover:text-orange-500"
              >
                Contact
              </button>
            </div>

            {/* Get a Quote Button */}
            <div className="hidden lg:flex items-center">
              <motion.button
                onClick={() => handleNav("/contact")}
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
        </div>
      </nav>
    </>
  );
};

export default Header;
