import React, { useRef } from "react";
import "react-before-after-slider-component/dist/build.css";

import service1Image from "../assets/services/service1.jpg";
import service2Image from "../assets/services/service2.jpg";
import service3Image from "../assets/services/service3.jpg";
import service4Image from "../assets/services/service4.jpg";
import service5Image from "../assets/services/service5.jpg";
import service6Image from "../assets/services/service6.jpg";

import banner from "../assets/middle.png";
import BeforeAfterProjects from "../components/Projects";

const Services = () => {
  const services = [
    {
      title: "Kitchens & Bathrooms",
      description:
        "Upgrade your home with new cabinetry, tile, fixtures, lighting, and vanities — plus refreshed tubs or showers that bring comfort and style.",
      image: service1Image,
    },
    {
      title: "Flooring, Painting & Drywall",
      description:
        "Upgrade to durable LVP/laminate floors, crisp baseboards, smooth paintwork, and patch and texture for a polished look inside and out.",
      image: service2Image,
    },
    {
      title: "Decks & Outdoor",
      description:
        "From new builds and resurfacing to railings, pergolas, and staining — we keep your outdoor spaces strong and stylish.",
      image: service3Image,
    },
    {
      title: "Tenant Improvements",
      description:
        "From office buildouts to reconfigurations, ADA updates, and finish upgrades — we tailor spaces for style and efficiency.",
      image: service4Image,
    },
    {
      title: "Restaurant & Retail",
      description:
        "Light remodels, custom millwork, BOH improvements, and dining area refreshes to elevate both function and guest experience.",
      image: service5Image,
    },
    {
      title: "Maintenance Contracts",
      description:
        "Ongoing repairs, punch list completion, and seasonal upkeep services that keep properties in top condition.",
      image: service6Image,
    },
  ];

  const renderServiceCard = (item) => (
    <div
      key={item.title}
      className="group relative rounded-2xl shadow-lg overflow-hidden cursor-pointer flex flex-col md:block transform transition duration-500 md:hover:-translate-y-2"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-64 object-cover transition-transform duration-700 md:group-hover:scale-110"
      />
      <div className="md:hidden p-4 bg-white text-gray-800">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-sm mt-2">{item.description}</p>
      </div>
      <div className="hidden md:flex absolute inset-0 flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-sm mt-1">{item.description}</p>
      </div>
      <div className="hidden md:flex absolute inset-0 items-center justify-center bg-black/40 text-white text-2xl font-bold transition-opacity duration-500 group-hover:opacity-0 z-20">
        {item.title}
      </div>
    </div>
  );

  return (
    <section className="pt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-full">
        {/* Services Section */}
        <h2 className="text-4xl sm:text-6xl font-bold text-center text-gray-800 mb-4">
          Our Services
        </h2>
        <p className="text-center font-medium text-gray-600 mb-12 max-w-2xl mx-auto px-4 sm:px-0">
          We offer a wide range of services to meet all your construction needs,
          from initial planning to final touches.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 sm:px-8">
          {services.map((service) => renderServiceCard(service))}
        </div>

        {/* Banner Section */}
        <div className="relative w-full mt-28 mb-0">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover shadow-lg"
          />

          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
              Our Projects
            </h1>
            <p className="text-base sm:text-lg font-medium text-gray-200 max-w-2xl">
              Explore our completed projects that showcase quality
              craftsmanship, modern design, and attention to every detail.
            </p>
          </div>
        </div>
      </div>

      {/* Before & After Projects */}
      <div className="mt-0">
        <BeforeAfterProjects />
      </div>
    </section>
  );
};

export default Services;
