import React from "react";

const services = [
  {
    title: "Building Construction",
    image: "https://placehold.co/600x400/000000/FFFFFF?text=Building+Construction",
    description:
      "We specialize in a wide range of construction services, including residential, commercial, and industrial projects.",
    alt: "Building Construction",
  },
  {
    title: "Architecture Design",
    image: "https://placehold.co/600x400/000000/FFFFFF?text=Architecture+Design",
    description:
      "Our post-construction services give you peace of mind knowing that we are still here for you even after.",
    alt: "Architecture Design",
  },
  {
    title: "Building Renovation",
    image: "https://placehold.co/600x400/000000/FFFFFF?text=Building+Renovation",
    description:
      "We offer comprehensive building renovation services to transform your spaces and enhance their functionality.",
    alt: "Building Renovation",
  },
  {
    title: "Building Maintenance",
    image: "https://placehold.co/600x400/000000/FFFFFF?text=Building+Maintenance",
    description:
      "Our post-construction services give you peace of mind knowing that we are still here for you even after.",
    alt: "Building Maintenance",
  },
];

const App = () => {
  return (
    <div className="bg-blue-50">
      {/* Custom Responsive Container */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-12">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <p className="text-gray-600 text-2xl font-bold">
            We specialize in a wide range of construction services, including
            residential, commercial, and industrial projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full overflow-hidden rounded-2xl shadow-xl group"
            >
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

              {/* Initial content */}
              <div className="absolute bottom-6 left-6 right-6 text-white transition-all duration-300 group-hover:translate-y-10 group-hover:opacity-0">
                <h2 className="text-2xl font-bold">{service.title}</h2>
              </div>

              {/* Hovered content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-black bg-opacity-70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
                  <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                  <p className="text-sm mb-4">{service.description}</p>
                  <a
                    href="#"
                    className="flex items-center text-sm font-semibold"
                  >
                    View More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-yellow-400 text-gray-800 font-bold rounded-full shadow-lg hover:bg-yellow-500 transition-colors">
            View All Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
