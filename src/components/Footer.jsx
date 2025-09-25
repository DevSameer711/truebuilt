import React from 'react'
import bgImg from '../assets/bg.jpg' // adjust path if needed

const Footer = ({ onNavClick }) => {
  return (
    <footer className="relative bg-gray-900 text-gray-400 py-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      {/* Content */}
      <div className="relative container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1">
            <h3 className="text-3xl font-bold text-white mb-4">TrueBuild</h3>
            <p className="text-sm">
              TrueBuild Property Solutions is a locally owned and operated
              construction company based in Charlotte, NC. We specialize in
              bringing your residential and commercial renovation dreams to
              life.
            </p>
            <div className="flex space-x-4 mt-4 text-white">
              {/* social icons... */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavClick('home')}
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button className="hover:text-orange-500 transition-colors duration-300">
                  About Us
                </button>
              </li>
              <li>
                <button className="hover:text-orange-500 transition-colors duration-300">
                  Our Services
                </button>
              </li>
              <li>
                <button className="hover:text-orange-500 transition-colors duration-300">
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
                  onClick={() => onNavClick('services')}
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  General Construction
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('services')}
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Property Maintenance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('services')}
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Project Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('services')}
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Virtual Design & Build
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('services')}
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Preconstruction
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <p className="flex items-center text-sm mb-2">
              {/* phone icon... */}
                (980) 395‑2025
            </p>
            <p className="flex items-center text-sm mb-2">
              {/* email icon... */}
              info@truebuildpropertysolutions.com
            </p>
            <p className="flex items-center text-sm mb-2">
              {/* address icon... */}
              Charlotte, NC & Surrounding Areas
            </p>
          </div>
        </div>

        {/* Newsletter & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h4 className="text-white font-semibold text-lg mb-2">
              Subscribe For Latest Updates
            </h4>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 bg-gray-800 rounded-l-md text-white border border-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              <button className="px-6 py-2 bg-orange-500 text-white rounded-r-md hover:bg-orange-600 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
          <div className="text-sm">
            <p>&copy; {new Date().getFullYear()} TrueBuild. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
