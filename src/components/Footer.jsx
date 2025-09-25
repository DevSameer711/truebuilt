import React from "react";
import bgImg from "../assets/bg.jpg"; // adjust path if needed

const Footer = ({ onNavClick }) => {
  const handleClick = (section) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    onNavClick(section);
  };

  return (
    <footer className="relative bg-gray-900 text-gray-400 pb-10 pt-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      {/* Black gradient overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          {/* Logo + Heading */}
          <div className="col-span-1 flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 64 64"
                fill="none"
                color="gray"
                aria-hidden="true"
                className="shrink-0"
              >
                <rect
                  x="10"
                  y="10"
                  width="44"
                  height="44"
                  rx="8"
                  stroke="gray"
                  strokeWidth="4"
                  fill="transparent"
                ></rect>
                <path
                  d="M22 42 L42 22"
                  stroke="gray"
                  strokeWidth="4"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M22 24 h12 v12"
                  stroke="gray"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                ></path>
              </svg>

              <h3 className="text-3xl font-bold text-white">TrueBuild</h3>
            </div>

            {/* Description */}
            <p className="text-sm">
              TrueBuild Property Solution is a locally owned and operated
              construction company based in Charlotte, NC.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleClick("home")}
                  className="hover:text-[#df642b] transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick("services")}
                  className="hover:text-[#df642b] transition-colors duration-300"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick("contact")}
                  className="hover:text-[#df642b] transition-colors duration-300"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleClick("services")}
                  className="hover:text-[#df642b] transition-colors duration-300"
                >
                  Kitchens & Bathrooms
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick("services")}
                  className="hover:text-[#df642b] transition-colors duration-300"
                >
                  Flooring, Painting & Drywall
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick("services")}
                  className="hover:text-[#df642b] transition-colors duration-300"
                >
                  Decks & Outdoor
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick("services")}
                  className="hover:text-[#df642b] transition-colors duration-300"
                >
                  Tenant Improvements
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick("services")}
                  className="hover:text-[#df642b] transition-colors duration-300"
                >
                  Restaurant & Retail
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick("services")}
                  className="hover:text-[#df642b] transition-colors duration-300"
                >
                  Maintenance Contracts
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <p className="text-sm mb-2">(980) 395-2025</p>
            <p className="text-sm mb-2">info@truebuildpropertysolution.com</p>
            <p className="text-sm mb-2">Charlotte, NC & Surrounding Areas</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-700 relative z-10">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} TrueBuild. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
