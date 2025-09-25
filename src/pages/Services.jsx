import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const services = [
    { title: "Kitchens & Bathrooms", description: "Upgrade your home with new cabinetry, tile, fixtures, lighting, and vanities — plus refreshed tubs or showers that bring comfort and style.", image: "./src/assets/services/service1.jpg" },
    { title: "Flooring, Painting & Drywall", description: "Upgrade to durable LVP/laminate floors, crisp baseboards, smooth paintwork, and patch and texture for a polished look inside and out.", image: "./src/assets/services/service2.jpg" },
    { title: "Decks & Outdoor", description: "From new builds and resurfacing to railings, pergolas, and staining — we keep your outdoor spaces strong and stylish.", image: "./src/assets/services/service3.jpg" },
    { title: "Tenant Improvements", description: "From office buildouts to reconfigurations, ADA updates, and finish upgrades — we tailor spaces for style and efficiency.", image: "./src/assets/services/service4.jpg" },
    { title: "Restaurant & Retail", description: "Light remodels, custom millwork, BOH improvements, and dining area refreshes to elevate both function and guest experience.", image: "./src/assets/services/service5.jpg" },
    { title: "Maintenance Contracts", description: "Ongoing repairs, punch list completion, and seasonal upkeep services that keep properties in top condition.", image: "./src/assets/services/service6.jpg" },
  ];

  const projects = [
    { title: "Luxury Kitchen Remodel", description: "A complete kitchen overhaul with modern cabinetry, countertops, and lighting to create a functional yet stylish space.", images: ["./src/assets/projects/indoor1.jpg","./src/assets/projects/indoor2.jpg","./src/assets/projects/indoor3.jpg"] },
    { title: "Outdoor Deck & Patio", description: "Building a durable and stylish outdoor area including decking, railings, and seating for maximum comfort and longevity.", images: ["./src/assets/projects/outdoor1.jpg","./src/assets/projects/outdoor2.jpg"] },
  ];

  const projectRefs = useRef([]);
  
  const sliderSettings = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, swipeToSlide: true, arrows: false };

 const renderServiceCard = (item) => (
  <div
    key={item.title}
    className="group relative rounded-2xl shadow-lg overflow-hidden cursor-pointer flex flex-col md:block
               transform transition duration-500
               md:hover:-translate-y-2" // hover translate only on md+
  >
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-64 object-cover transition-transform duration-700
                 md:group-hover:scale-110" // zoom only on md+
    />
    <div className="md:hidden p-4 bg-white text-gray-800">
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="text-sm mt-2">{item.description}</p>
    </div>
    <div className="hidden md:flex absolute inset-0 flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10">
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="text-sm mt-1">{item.description}</p>
    </div>
    <div className="hidden md:flex absolute inset-0  items-center justify-center bg-black/40 text-white text-2xl font-bold transition-opacity duration-500 group-hover:opacity-0 z-20">
      {item.title}
    </div>
  </div>
);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-full  ">

        {/* Services */}
        <h2 className="text-4xl sm:text-6xl font-bold text-center text-gray-800 mb-4">Our Services</h2>
        <p className="text-center font-medium text-gray-600 mb-12 max-w-2xl mx-auto px-4 sm:px-0">We offer a wide range of services to meet all your construction needs, from initial planning to final touches.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 px-5 pl-8 lg:grid-cols-3 gap-10">
          {services.map((service) => renderServiceCard(service))}
        </div>

        {/* Full-width banner */}
      <div className="w-full my-36  ">
          <img src="./src/assets/banner/middle.jpg" alt="Banner" className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-xl shadow-lg" />
        </div>

        {/* Projects */}
        <h2 className="text-4xl sm:text-6xl font-bold text-center text-gray-800 my-12">Our Projects</h2>
        <div className="flex flex-col gap-16 items-center px-4 sm:px-0">
          {projects.map((project, idx) => {
            projectRefs.current[idx] = projectRefs.current[idx] || React.createRef();
            return (
              <div key={idx} className="flex flex-col md:flex-row items-center gap-8 w-full max-w-5xl mx-auto">
                {/* Slider */}
                <div className="relative w-full md:w-1/2">
                  <Slider
                    ref={projectRefs.current[idx]}
                    {...sliderSettings}
                    className="!overflow-visible"
                  >
                    {project.images.map((img, i) => (
                      <div key={i} className="flex justify-center px-1">
                        <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
                          <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    ))}
                  </Slider>

                  {/* Side Buttons */}
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-transparent text-white text-2xl z-20"
                    onClick={() => projectRefs.current[idx].current.slickPrev()}
                  >
                    &#8592;
                  </button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent text-white text-2xl z-20"
                    onClick={() => projectRefs.current[idx].current.slickNext()}
                  >
                    &#8594;
                  </button>
                </div>

                {/* Description */}
                <div className="w-full md:w-1/2 flex flex-col justify-center mt-4 md:mt-0">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-600">{project.title}</h3>
                  <p className="text-gray-800 text-base">{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
