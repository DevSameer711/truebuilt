import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpeg"

const Header = () => {
  const navigate = useNavigate();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileNavOpen(false);
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#40641e] text-white p-2 hidden sm:block">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center space-x-2 flex-1 text-sm">
            <FaMapMarkerAlt />
            <span>Charlotte, NC & Surrounding Areas</span>
          </div>

          <div className="flex space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <FaPhone />
              <span>(980) 395-2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span>info@truebuildpropertysolution.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#fff] text-black p-4 sticky top-0 z-50">
  <div className="container mx-auto flex justify-between items-center">
    {/* Logo */}
    <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNav("/")}>
      <img src={Logo} alt="" className="h-16 w-auto"/>
    </div>

    {/* Nav Links */}
    <div className="hidden lg:flex items-center space-x-6">
      <button onClick={() => handleNav("/")} className="p-2 hover:text-[#40641e]">Home</button>
      <button onClick={() => handleNav("/services")} className="p-2 hover:text-[#40641e]">Services</button>
      <button onClick={() => handleNav("/contact")} className="p-2 hover:text-[#40641e]">Contact</button>
    </div>

    {/* Get a Quote Button */}
    <div className="hidden lg:flex items-center">
      <motion.button
        onClick={() => handleNav("/contact")}
        className="px-5 py-2 bg-[#40641e] text-[#fff] font-semibold rounded-full shadow-lg group"
        whileHover={{ scale: 1.05 }}
      >
        <span className="block group-hover:-translate-y-1 transition-transform duration-300">
          Get a Quote
        </span>
      </motion.button>
    </div>


          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMobileNavOpen(true)}>
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Navigation Drawer */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isMobileNavOpen ? 0 : "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-[#16191c] text-white shadow-lg z-50 p-6"
      >
        <div className="flex justify-between items-center mb-8">
          <div className="text-xl font-bold ">Menu</div>
          <button onClick={() => setIsMobileNavOpen(false)}>
            <FaTimes size={24} />
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          <button onClick={() => handleNav("/")} className="p-2 hover:text-[#314d17] text-left">Home</button>
          <button onClick={() => handleNav("/services")} className="p-2 hover:text-[#314d17] text-left">Services</button>
          <button onClick={() => handleNav("/contact")} className="p-2 hover:text-[#314d17] text-left">Contact</button>
          <motion.button
            onClick={() => handleNav("/contact")}
            className="px-6 py-2 bg-white text-[#314d17] font-semibold rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            Get a Quote
          </motion.button>
        </div>
      </motion.div>

      {/* Overlay */}
      {isMobileNavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileNavOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;
